/* Firebase init + shared cloud data helpers (compat SDK, classic scripts).
   Loaded by index.html (hub/login), phase1.html, phase2.html.
   The config below is a PUBLIC client config (safe to commit); access is
   controlled by Firestore security rules (each user can touch only their
   own users/{uid} document).

   NOTE ON GITHUB SECRET SCANNING: GitHub flags the apiKey below as a
   "Google API Key". This is a KNOWN FALSE POSITIVE. A Firebase web apiKey
   is a public project identifier, not a credential -- it ships in every
   visitor's browser by design and cannot read/write data on its own. The
   real security boundary is the Firestore rules + Firebase Auth, NOT this
   key. Do not rotate it or scrub git history; dismiss the alert as
   "won't fix / used in public client". */
var firebaseConfig = {
  apiKey: "AIzaSyBPwk84M_evFnPHRsposaAzorfSy4ELHZk",
  authDomain: "tfs-fitness-db.firebaseapp.com",
  projectId: "tfs-fitness-db",
  storageBucket: "tfs-fitness-db.firebasestorage.app",
  messagingSenderId: "12220574235",
  appId: "1:12220574235:web:a4e857ae1be5f16fb066be"
};

firebase.initializeApp(firebaseConfig);
var wtAuth = firebase.auth();
var wtDB = firebase.firestore();

/* Offline support: cache reads and queue writes while offline. */
try{ wtDB.enablePersistence({ synchronizeTabs: true }).catch(function(){}); }catch(e){}

function wtUserDoc(uid){ return wtDB.collection('users').doc(uid); }

/* Load one phase's data object (stored as a JSON string field). */
function wtLoadPhase(uid, phase){
  return wtUserDoc(uid).get().then(function(snap){
    if(snap.exists){
      var s = snap.data()[phase];
      if(s){ try{ return JSON.parse(s); }catch(e){} }
    }
    return null;
  });
}

/* Load ALL phases for a user in one read (used for cross-phase training view). */
function wtLoadAll(uid){
  return wtUserDoc(uid).get().then(function(snap){
    var out = {};
    if(snap.exists){
      var d = snap.data();
      ['p1','p2','p3','p4'].forEach(function(k){ if(d[k]){ try{ out[k] = JSON.parse(d[k]); }catch(e){} } });
    }
    return out;
  });
}

/* Debounced save of one phase's data object. */
var wtSaveTimers = {};
function wtSavePhase(uid, phase, dataObj){
  var payload = {}; payload[phase] = JSON.stringify(dataObj); payload.updated = Date.now();
  if(wtSaveTimers[phase]) clearTimeout(wtSaveTimers[phase]);
  wtSaveTimers[phase] = setTimeout(function(){
    wtUserDoc(uid).set(payload, { merge: true }).catch(function(){ /* queued offline */ });
  }, 700);
}
