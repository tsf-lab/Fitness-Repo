/* ---------------------------------------------------------------------------
   Shared workout database for all phases.
   Loaded by phase1.html, phase2.html, and any future phaseN.html.

   Generated from exercises.csv. To add a new phase: append a pN:[ ... ]
   entry to PHASES; its exercises auto-populate the swap options.
--------------------------------------------------------------------------- */
function single(ex){ return {type:'single', ex}; }
function superset(id, rounds, subs){ return {type:'superset', id, rounds, subs}; }

const PHASES = {
  p1: [
{id:'s1', title:'Legs', accent:'legs', items:[
  single({id:'e1',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'}),
  single({id:'e2',name:'Leg Curl, Lying',equip:'Machine',muscle:'legs',sets:5,reps:'20',w:true,note:'10 per leg'}),
  single({id:'e3',name:'Leg Extension',equip:'Machine',muscle:'legs',sets:7,reps:'10',w:true,note:'Last set: go lighter, do as many reps as possible'}),
  single({id:'e4',name:'Squat',equip:'Barbell/Rack',muscle:'legs',sets:5,reps:'10',w:true}),
  single({id:'e5',name:'Lunge',equip:'Free Weights',muscle:'legs',sets:3,reps:'20',w:true,note:'10 per leg'}),
  single({id:'e6',name:'Leg Press, Single Leg',equip:'Machine',muscle:'legs',sets:3,reps:'20',w:true,note:'10 per leg'}),
  superset('sup1',4,[
    {id:'e7',name:'Hip Adduction',equip:'Machine',muscle:'legs',sets:4,reps:'15',w:true},
    {id:'e8',name:'Squat, Prisoner',equip:'Other',muscle:'legs',sets:4,reps:'20',w:false}
  ]),
  single({id:'e9',name:'Romanian Deadlift',equip:'Barbell/Rack',muscle:'legs',sets:4,reps:'10',w:true}),
  superset('sup2',3,[
    {id:'e10',name:'Calf Raise, Seated',equip:'Machine',muscle:'legs',sets:3,reps:'15',w:true},
    {id:'e11',name:'Glute Bridge',equip:'Floor',muscle:'legs',sets:3,reps:'12',w:false,note:'Band Optional: hold and squeeze 2 sec at top'}
  ]),
  single({id:'e12',name:'Treadmill, Power Walk',equip:'Machine',muscle:'cardio',sets:1,reps:'5 min',w:false,timed:true,cardio:true,target:5,unit:'min',note:'High incline, push through calves'})
]},
{id:'s2', title:'Chest & Triceps', accent:'chest', items:[
  single({id:'e1',name:'Elliptical',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'}),
  single({id:'e2',name:'Fly, Pec Deck',equip:'Machine',muscle:'chest',sets:4,reps:'20',w:true,note:'Slow and controlled, chest should burn'}),
  single({id:'e3',name:'Bench Press',equip:'Bench',muscle:'chest',sets:5,reps:'10',w:true}),
  single({id:'e4',name:'DB Bench Press, Incline',equip:'Free Weights',muscle:'chest',sets:4,reps:'15',w:true,note:'High rep'}),
  single({id:'e5',name:'Bench Press, Incline',equip:'Bench',muscle:'chest',sets:4,reps:'8',w:true,note:'Lighter weight, very slow reps'}),
  single({id:'e6',name:'Chest Press',equip:'Cable',muscle:'chest',sets:4,reps:'12',w:true}),
  superset('sup1',3,[
    {id:'e7',name:'Dip, Tricep',equip:'Other',muscle:'arms',sets:3,reps:'10',w:false},
    {id:'e8',name:'Pull Up',equip:'Other',muscle:'back',sets:3,reps:'10',w:false}
  ]),
  single({id:'e9',name:'Chest Press',equip:'Machine',muscle:'chest',sets:4,reps:'10',w:true,note:'Any flat machine press works'}),
  superset('sup2',3,[
    {id:'e10',name:'DB Bench Press, Neutral Grip',equip:'Free Weights',muscle:'chest',sets:3,reps:'10',w:true},
    {id:'e11',name:'DB Tricep Extension, Lying, One Arm',equip:'Free Weights',muscle:'arms',sets:3,reps:'20',w:true,note:'10 per side'}
  ]),
  single({id:'e12',name:'Tricep Extension',equip:'Cable',muscle:'arms',sets:4,reps:'15',w:true})
]},
{id:'s3', title:'Back & Abs', accent:'back', items:[
  single({id:'e1',name:'Treadmill',equip:'Machine',muscle:'cardio',sets:1,reps:'5 min',w:false,timed:true,cardio:true,target:5,unit:'min',note:'5-7 mph'}),
  single({id:'e2',name:'Pull Down, Wide Grip',equip:'Cable',muscle:'back',sets:7,reps:'10',w:true}),
  superset('sup1',4,[
    {id:'e3',name:'DB Row, Tripod',equip:'Free Weights',muscle:'back',sets:4,reps:'10',w:true},
    {id:'e4',name:'DB Shrug',equip:'Free Weights',muscle:'back',sets:4,reps:'15',w:true}
  ]),
  single({id:'e5',name:'Rack Pull',equip:'Barbell/Rack',muscle:'back',sets:4,reps:'10',w:true,note:'Put on good music and pull'}),
  superset('sup2',4,[
    {id:'e6',name:'Face Pull',equip:'Cable',muscle:'back',sets:4,reps:'12',w:true},
    {id:'e7',name:'Straight Arm Pull Down',equip:'Cable',muscle:'back',sets:4,reps:'12',w:true}
  ]),
  single({id:'e8',name:'Pull Down, One Arm',equip:'Cable',muscle:'back',sets:4,reps:'20',w:true,note:'10 per side, 2 sec squeeze'}),
  superset('sup3',3,[
    {id:'e9',name:'Chin Up',equip:'Other',muscle:'back',sets:3,reps:'10',w:false},
    {id:'e10',name:'DB Russian Twist',equip:'Free Weights',muscle:'core',sets:3,reps:'25',w:true}
  ]),
  superset('sup4',3,[
    {id:'e11',name:'Plank',equip:'Floor',muscle:'core',sets:3,reps:'45 sec',w:false,timed:true,target:45,unit:'sec'},
    {id:'e12',name:'Leg Raise',equip:'Floor',muscle:'core',sets:3,reps:'10',w:false},
    {id:'e13',name:'Sit Up',equip:'Floor',muscle:'core',sets:3,reps:'15',w:false}
  ])
]},
{id:'s4', title:'Shoulders & Biceps', accent:'shoulders', items:[
  single({id:'e1',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'}),
  superset('sup1',3,[
    {id:'e2',name:'Lateral Raise',equip:'Cable',muscle:'shoulders',sets:3,reps:'10',w:true},
    {id:'e3',name:'Push Up',equip:'Floor',muscle:'chest',sets:3,reps:'15',w:false}
  ]),
  single({id:'e4',name:'Military Press',equip:'Barbell/Rack',muscle:'shoulders',sets:5,reps:'10',w:true,note:'First set: light warm up'}),
  superset('sup2',4,[
    {id:'e5',name:'Front Raise',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'10',w:true,note:'Go heavy'},
    {id:'e6',name:'DB Rear Delt Fly, Bent Over, Standing',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'12',w:true}
  ]),
  single({id:'e7',name:'Arnold Press, Seated',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'10',w:true,note:'Heavy'}),
  single({id:'e8',name:'Bicep Curl, Preacher, EZ Bar',equip:'Free Weights',muscle:'arms',sets:4,reps:'10',w:true}),
  superset('sup3',3,[
    {id:'e9',name:'DB Bicep Curl, Zottman',equip:'Free Weights',muscle:'arms',sets:3,reps:'12',w:true},
    {id:'e10',name:'DB Bicep Curl, Standing',equip:'Free Weights',muscle:'arms',sets:3,reps:'12',w:true}
  ]),
  superset('sup4',4,[
    {id:'e11',name:'DB Hammer Curl, Seated',equip:'Free Weights',muscle:'arms',sets:4,reps:'20',w:true},
    {id:'e12',name:'DB Lateral Raise, Seated',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'10',w:true}
  ])
]},
{id:'s5', title:'Full Upper', accent:'arms', items:[
  superset('sup1',2,[
    {id:'e1',name:'Burpee',equip:'Other',muscle:'cardio',sets:2,reps:'10',w:false},
    {id:'e2',name:'Sit Up',equip:'Floor',muscle:'core',sets:2,reps:'10',w:false},
    {id:'e3',name:'Mountain Climber, Rotating',equip:'Floor',muscle:'core',sets:2,reps:'30',w:false},
    {id:'e4',name:'Flutter Kicks',equip:'Floor',muscle:'core',sets:2,reps:'20',w:false}
  ]),
  single({id:'e5',name:'Bench Press, Close Grip',equip:'Bench',muscle:'chest',sets:4,reps:'15',w:true}),
  superset('sup2',4,[
    {id:'e6',name:'Upright Row',equip:'Cable',muscle:'shoulders',sets:4,reps:'12',w:true},
    {id:'e7',name:'Push Up, Military Press',equip:'Floor',muscle:'shoulders',sets:4,reps:'10',w:false}
  ]),
  single({id:'e8',name:'Pendlay Row',equip:'Barbell/Rack',muscle:'back',sets:4,reps:'12',w:true}),
  single({id:'e9',name:'High Row',equip:'Machine',muscle:'back',sets:4,reps:'10',w:true,note:'Use close grip lat pulldown if unavailable'}),
  superset('sup3',4,[
    {id:'e10',name:'DB Tricep Extension, Standing',equip:'Free Weights',muscle:'arms',sets:4,reps:'15',w:true},
    {id:'e11',name:'Concentration Curl',equip:'Free Weights',muscle:'arms',sets:4,reps:'10',w:true}
  ]),
  superset('sup4',3,[
    {id:'e12',name:'Shoulder To Shoulder Press',equip:'Machine',muscle:'shoulders',sets:3,reps:'10',w:true},
    {id:'e13',name:'Kettlebell Swing',equip:'Free Weights',muscle:'legs',sets:3,reps:'15',w:true},
    {id:'e14',name:'Dip, Tricep',equip:'Other',muscle:'arms',sets:3,reps:'20',w:false}
  ])
]}
  ],
  p2: [
{id:'s1', title:'Chest & Biceps', accent:'chest', items:[
  single({id:'e1',name:'Knee Raise, Hanging',equip:'Other',muscle:'core',sets:3,reps:'15',w:false}),
  single({id:'e2',name:'Chest Press, Incline Bench, Plateloaded',equip:'Machine',muscle:'chest',sets:5,reps:'12',w:true,note:'If no machine is available, use dumbbells'}),
  single({id:'e3',name:'DB Bench Press',equip:'Free Weights',muscle:'chest',sets:4,reps:'10',w:true}),
  single({id:'e4',name:'Bench Press',equip:'Barbell/Bench',muscle:'chest',sets:4,reps:'8',w:true,note:'GO HEAVY!!!'}),
  single({id:'e5',name:'Fly, Standing',equip:'Cable',muscle:'chest',sets:4,reps:'12',w:true}),
  single({id:'e6',name:'Fly, High to Low, Standing',equip:'Cable',muscle:'chest',sets:3,reps:'15',w:true}),
  single({id:'e7',name:'Chest Press, Stack Loaded',equip:'Machine',muscle:'chest',sets:5,reps:'10',w:true,note:'Close grip'}),
  superset('sup1',4,[
    {id:'e8',name:'DB Fly, One Arm',equip:'Free Weights',muscle:'chest',sets:4,reps:'20',w:true,note:'10 per side'},
    {id:'e9',name:'EZ Bar Bicep Curl',equip:'Free Weights',muscle:'arms',sets:4,reps:'12',w:true}
  ]),
  superset('sup2',4,[
    {id:'e10',name:'DB Bicep Curl, Incline Bench',equip:'Free Weights',muscle:'arms',sets:4,reps:'10',w:true},
    {id:'e11',name:'Push Up',equip:'Floor',muscle:'chest',sets:4,reps:'12',w:false}
  ]),
  single({id:'e12',name:'Stairmaster',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'})
]},
{id:'s2', title:'Back & Triceps', accent:'back', items:[
  single({id:'e1',name:'Sit Up',equip:'Floor',muscle:'core',sets:1,reps:'100',w:false,note:'Do in as few sets as possible'}),
  single({id:'e2',name:'Deadlift',equip:'Barbell/Rack',muscle:'back',sets:5,reps:'10',w:true}),
  single({id:'e3',name:'Lateral Raise',equip:'Cable',muscle:'shoulders',sets:3,reps:'10',w:true,note:'Cool down from deadlifts, squeeze traps on lateral raise'}),
  single({id:'e4',name:'Pull Down, Wide Grip',equip:'Cable',muscle:'back',sets:4,reps:'10',w:true}),
  superset('sup1',4,[
    {id:'e5',name:'Row, One Arm, Seated',equip:'Cable',muscle:'back',sets:4,reps:'20',w:true,note:'10 per side'},
    {id:'e6',name:'Push Up, Close Grip',equip:'Floor',muscle:'chest',sets:4,reps:'10',w:false}
  ]),
  superset('sup2',4,[
    {id:'e7',name:'Straight Arm Pull Down',equip:'Cable',muscle:'back',sets:4,reps:'12',w:true},
    {id:'e8',name:'Face Pull',equip:'Cable',muscle:'back',sets:4,reps:'10',w:true}
  ]),
  single({id:'e9',name:'Smith Machine Shrug',equip:'Machine',muscle:'back',sets:3,reps:'15',w:true}),
  single({id:'e10',name:'Tricep Extension, Rope',equip:'Cable',muscle:'arms',sets:5,reps:'15',w:true}),
  single({id:'e11',name:'DB Tricep Extension, Standing',equip:'Free Weights',muscle:'arms',sets:4,reps:'12',w:true}),
  single({id:'e12',name:'Elliptical',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'})
]},
{id:'s3', title:'Shoulders & Abs', accent:'shoulders', items:[
  single({id:'e1',name:'Sit Up, Twist, Decline',equip:'Floor',muscle:'core',sets:1,reps:'100',w:false,note:'Complete in as few sets as possible'}),
  single({id:'e2',name:'Shoulder Press, Cuban, Seated',equip:'Free Weights',muscle:'shoulders',sets:2,reps:'10',w:true,note:'Light weight warm up'}),
  single({id:'e3',name:'DB Shoulder Press, Seated',equip:'Free Weights',muscle:'shoulders',sets:5,reps:'10',w:true}),
  superset('sup1',4,[
    {id:'e4',name:'Lateral Raise, Leaning',equip:'Cable',muscle:'shoulders',sets:4,reps:'10',w:true},
    {id:'e5',name:'Push Up, T',equip:'Floor',muscle:'chest',sets:4,reps:'10',w:false}
  ]),
  single({id:'e6',name:'Upright Row',equip:'Barbell/Rack',muscle:'shoulders',sets:4,reps:'12',w:true}),
  single({id:'e7',name:'Thruster',equip:'Barbell/Rack',muscle:'shoulders',sets:3,reps:'10',w:true}),
  superset('sup2',3,[
    {id:'e8',name:'DB Rear Delt Fly, Bent Over, Standing',equip:'Free Weights',muscle:'shoulders',sets:3,reps:'12',w:true},
    {id:'e9',name:'Front Raise, Plate',equip:'Free Weights',muscle:'shoulders',sets:3,reps:'10',w:true},
    {id:'e10',name:'DB Shrug',equip:'Free Weights',muscle:'back',sets:3,reps:'15',w:true}
  ]),
  single({id:'e11',name:'Plank',equip:'Floor',muscle:'core',sets:3,reps:'1 min',w:false,timed:true,target:60,unit:'sec'}),
  superset('sup3',3,[
    {id:'e12',name:'Crunch, Bosu Ball',equip:'Floor',muscle:'core',sets:3,reps:'10',w:false},
    {id:'e13',name:'Leg Raise',equip:'Floor',muscle:'core',sets:3,reps:'10',w:false}
  ]),
  single({id:'e14',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'2 mi',w:false,timed:true,cardio:true,target:2,unit:'mi'})
]},
{id:'s4', title:'Legs', accent:'legs', items:[
  single({id:'e1',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min',note:'Warm up'}),
  single({id:'e2',name:'Leg Press',equip:'Machine',muscle:'legs',sets:6,reps:'10',w:true}),
  single({id:'e3',name:'Reverse Lunge',equip:'Barbell/Rack',muscle:'legs',sets:4,reps:'20',w:true,note:'10 per leg'}),
  superset('sup1',4,[
    {id:'e4',name:'Plie Squat',equip:'Free Weights',muscle:'legs',sets:4,reps:'12',w:true},
    {id:'e5',name:'DB Romanian Deadlift',equip:'Free Weights',muscle:'legs',sets:4,reps:'10',w:true}
  ]),
  single({id:'e6',name:'Hip Thrust',equip:'Barbell/Rack',muscle:'legs',sets:3,reps:'10',w:true}),
  superset('sup2',4,[
    {id:'e7',name:'Leg Curl, Lying',equip:'Machine',muscle:'legs',sets:4,reps:'10',w:true},
    {id:'e8',name:'Leg Extension, Single Leg',equip:'Machine',muscle:'legs',sets:4,reps:'20',w:true,note:'10 per leg'}
  ]),
  single({id:'e9',name:'Calf Raise, Seated',equip:'Machine',muscle:'legs',sets:3,reps:'15',w:true,note:'Any calf machine is fine. No machine: hold dumbbells and do them standing.'}),
  single({id:'e10',name:'Leg Press, Single Leg',equip:'Machine',muscle:'legs',sets:3,reps:'20',w:true,note:'10 per leg'}),
  superset('sup3',3,[
    {id:'e11',name:'Hip Adduction',equip:'Machine',muscle:'legs',sets:3,reps:'15',w:true},
    {id:'e12',name:'Hip Abduction',equip:'Machine',muscle:'legs',sets:3,reps:'15',w:true}
  ])
]},
{id:'s5', title:'Full Body', accent:'arms', items:[
  superset('sup1',3,[
    {id:'e1',name:'Burpee',equip:'Floor',muscle:'cardio',sets:3,reps:'10',w:false},
    {id:'e2',name:'Dead Bug',equip:'Floor',muscle:'core',sets:3,reps:'30',w:false}
  ]),
  single({id:'e3',name:'Squat',equip:'Floor',muscle:'legs',sets:4,reps:'10',w:true,note:'Full range of motion is key'}),
  superset('sup2',4,[
    {id:'e4',name:'DB Fly',equip:'Free Weights',muscle:'chest',sets:4,reps:'10',w:true},
    {id:'e5',name:'DB Pullover',equip:'Free Weights',muscle:'back',sets:4,reps:'10',w:true}
  ]),
  superset('sup3',3,[
    {id:'e6',name:'Arnold Press, Standing, One Arm',equip:'Free Weights',muscle:'shoulders',sets:3,reps:'20',w:true,note:'10 per side'},
    {id:'e7',name:'Crunch',equip:'Floor',muscle:'core',sets:3,reps:'15',w:false}
  ]),
  superset('sup4',3,[
    {id:'e8',name:'DB Walking Lunge',equip:'Free Weights',muscle:'legs',sets:3,reps:'20',w:true},
    {id:'e9',name:'Push Up, Pause',equip:'Floor',muscle:'chest',sets:3,reps:'5',w:false}
  ]),
  single({id:'e10',name:'T-Bar Row',equip:'Barbell/Rack',muscle:'back',sets:4,reps:'10',w:true,note:'No landmine: do barbell bent over row (close grip)'}),
  superset('sup5',3,[
    {id:'e11',name:'Tricep Extension, Reverse Grip',equip:'Cable',muscle:'arms',sets:3,reps:'15',w:true},
    {id:'e12',name:'Tricep Extension, Straight Bar',equip:'Cable',muscle:'arms',sets:3,reps:'8',w:true}
  ]),
  superset('sup6',3,[
    {id:'e13',name:'DB Concentration Curl',equip:'Free Weights',muscle:'arms',sets:3,reps:'20',w:true,note:'10 per arm'},
    {id:'e14',name:'DB Bicep Curl, Reverse Grip, One Arm, Standing',equip:'Free Weights',muscle:'arms',sets:3,reps:'20',w:true,note:'10 per arm'}
  ]),
  single({id:'e15',name:'Elliptical',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'})
]}
  ],
  p3: [
{id:'s1', title:'Legs (High Volume)', accent:'legs', items:[
  single({id:'e1',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'3 mi',w:false,timed:true,cardio:true,target:3,unit:'mi'}),
  single({id:'e2',name:'Leg Extension',equip:'Machine',muscle:'legs',sets:5,reps:'20',w:true,note:'Try your best to use recommended weight (115 lb)'}),
  single({id:'e3',name:'Leg Press',equip:'Machine',muscle:'legs',sets:5,reps:'20',w:true}),
  single({id:'e4',name:'Romanian Deadlift',equip:'Barbell/Rack',muscle:'legs',sets:10,reps:'10',w:true}),
  single({id:'e5',name:'Leg Curl, Seated',equip:'Machine',muscle:'legs',sets:7,reps:'15',w:true}),
  single({id:'e6',name:'Goblet Squat, Dumbbell',equip:'Free Weights',muscle:'legs',sets:5,reps:'20',w:true}),
  single({id:'e7',name:'Walking Lunge, Dumbbell',equip:'Free Weights',muscle:'legs',sets:2,reps:'50',w:true,note:'50 steps per leg total across the 2 sets (100 total)'}),
  single({id:'e8',name:'Sit Up, Decline Bench',equip:'Bench',muscle:'core',sets:5,reps:'20',w:false})
]},
{id:'s2', title:'Chest & Arms', accent:'chest', items:[
  single({id:'e1',name:'Chest Press, Stack Loaded',equip:'Machine',muscle:'chest',sets:5,reps:'15',w:true}),
  single({id:'e2',name:'Bench Press, Incline',equip:'Bench',muscle:'chest',sets:5,reps:'6-10',w:true}),
  single({id:'e3',name:'Bench Press, Dumbbell',equip:'Free Weights',muscle:'chest',sets:4,reps:'12',w:true}),
  single({id:'e4',name:'Fly, Standing',equip:'Cable',muscle:'chest',sets:5,reps:'10-12',w:true}),
  superset('sup1',4,[
    {id:'e5',name:'Bench Press, Close Grip',equip:'Bench',muscle:'chest',sets:4,reps:'6-10',w:true},
    {id:'e6',name:'Front Raise, Plate',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'10',w:true}
  ]),
  superset('sup2',4,[
    {id:'e7',name:'Hammer Curl, Alternate, Standing',equip:'Free Weights',muscle:'arms',sets:4,reps:'40',w:true},
    {id:'e8',name:'Push Up',equip:'Floor',muscle:'chest',sets:4,reps:'15',w:false}
  ]),
  single({id:'e9',name:'Tricep Extension, Dumbbell, One Arm, Standing',equip:'Free Weights',muscle:'arms',sets:4,reps:'15',w:true}),
  superset('sup3',3,[
    {id:'e10',name:'Dip, Tricep',equip:'Other',muscle:'arms',sets:3,reps:'10',w:false},
    {id:'e11',name:'Pull Up, Narrow Neutral Grip',equip:'Other',muscle:'back',sets:3,reps:'5-10',w:false}
  ]),
  superset('sup4',5,[
    {id:'e12',name:'Bicep Curl, Ez Bar',equip:'Free Weights',muscle:'arms',sets:5,reps:'8-12',w:true},
    {id:'e13',name:'Bicep Curl, Zottman',equip:'Free Weights',muscle:'arms',sets:5,reps:'10',w:true}
  ])
]},
{id:'s3', title:'Conditioning Work', accent:'cardio', items:[
  single({id:'e1',name:'Treadmill',equip:'Machine',muscle:'cardio',sets:1,reps:'1 mi',w:false,timed:true,cardio:true,target:1,unit:'mi'}),
  superset('sup1',5,[
    {id:'e2',name:'Burpee',equip:'Other',muscle:'cardio',sets:5,reps:'10',w:false},
    {id:'e3',name:'Squat, Bodyweight',equip:'Other',muscle:'legs',sets:5,reps:'15',w:false},
    {id:'e4',name:'Mountain Climber',equip:'Floor',muscle:'core',sets:5,reps:'20',w:false}
  ]),
  single({id:'e5',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'2 mi',w:false,timed:true,cardio:true,target:2,unit:'mi'}),
  superset('sup2',3,[
    {id:'e6',name:'Push Up, T',equip:'Floor',muscle:'chest',sets:3,reps:'20',w:false},
    {id:'e7',name:'Leg Raise, Floor',equip:'Floor',muscle:'core',sets:3,reps:'20',w:false}
  ]),
  superset('sup3',3,[
    {id:'e8',name:'Box Jump',equip:'Other',muscle:'legs',sets:3,reps:'10',w:false},
    {id:'e9',name:'Plank',equip:'Floor',muscle:'core',sets:3,reps:'30 sec',w:false,timed:true,target:30,unit:'sec'},
    {id:'e10',name:'Plank, Shoulder Taps',equip:'Floor',muscle:'core',sets:3,reps:'30',w:false}
  ]),
  single({id:'e11',name:'Treadmill',equip:'Machine',muscle:'cardio',sets:1,reps:'1 mi',w:false,timed:true,cardio:true,target:1,unit:'mi'})
]},
{id:'s4', title:'Shoulders & Squats', accent:'shoulders', items:[
  superset('sup1',2,[
    {id:'e1',name:'Stretch, Squat',equip:'Floor',muscle:'legs',sets:2,reps:'10 sec',w:false,timed:true,target:10,unit:'sec'},
    {id:'e2',name:'Stretch, Glute',equip:'Floor',muscle:'legs',sets:2,reps:'10 sec',w:false,timed:true,target:10,unit:'sec'},
    {id:'e3',name:'Stretch, Inner Thigh',equip:'Floor',muscle:'legs',sets:2,reps:'20 sec',w:false,timed:true,target:20,unit:'sec'},
    {id:'e4',name:'Stretch, Shoulder, Back',equip:'Floor',muscle:'shoulders',sets:2,reps:'15 sec',w:false,timed:true,target:15,unit:'sec'},
    {id:'e5',name:'Stretch, Hip Flexor',equip:'Floor',muscle:'legs',sets:2,reps:'15 sec',w:false,timed:true,target:15,unit:'sec'},
    {id:'e6',name:'Stretch, Chest, Wall',equip:'Floor',muscle:'chest',sets:2,reps:'20 sec',w:false,timed:true,target:20,unit:'sec'}
  ]),
  single({id:'e7',name:'Squat',equip:'Barbell/Rack',muscle:'legs',sets:5,reps:'10',w:true}),
  single({id:'e8',name:'Military Press',equip:'Barbell/Rack',muscle:'shoulders',sets:4,reps:'8-10',w:true}),
  superset('sup2',4,[
    {id:'e9',name:'BB Front Raise',equip:'Barbell/Rack',muscle:'shoulders',sets:4,reps:'10',w:true},
    {id:'e10',name:'BB Upright Row',equip:'Barbell/Rack',muscle:'shoulders',sets:4,reps:'12',w:true}
  ]),
  single({id:'e11',name:'Lateral Raise',equip:'Cable',muscle:'shoulders',sets:5,reps:'12',w:true}),
  single({id:'e12',name:'Arnold Press, Seated',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'8-10',w:true}),
  single({id:'e13',name:'Rear Delt Fly, Bent Over, Standing, Dumbbell',equip:'Free Weights',muscle:'shoulders',sets:3,reps:'15',w:true}),
  superset('sup3',4,[
    {id:'e14',name:'Row',equip:'Machine',muscle:'back',sets:4,reps:'10',w:true},
    {id:'e15',name:'Push Up, Military Press',equip:'Floor',muscle:'shoulders',sets:4,reps:'10',w:false}
  ]),
  single({id:'e16',name:'Face Pull',equip:'Cable',muscle:'back',sets:3,reps:'15',w:true}),
  single({id:'e17',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'3 mi',w:false,timed:true,cardio:true,target:3,unit:'mi'})
]},
{id:'s5', title:'Back & Abs', accent:'back', items:[
  single({id:'e1',name:'Pull Down, Wide Grip',equip:'Cable',muscle:'back',sets:7,reps:'8-10',w:true}),
  single({id:'e2',name:'Row, Seated',equip:'Cable',muscle:'back',sets:5,reps:'10-12',w:true}),
  single({id:'e3',name:'BB Shrug',equip:'Barbell/Rack',muscle:'back',sets:4,reps:'8-10',w:true,note:'HEAVY'}),
  single({id:'e4',name:'Row, One Arm, Seated',equip:'Cable',muscle:'back',sets:4,reps:'10',w:true,note:'Aim for a 1-sec pause on each rep for maximum squeeze'}),
  single({id:'e5',name:'Row, T-Bar',equip:'Barbell/Rack',muscle:'back',sets:5,reps:'8-10',w:true}),
  superset('sup1',4,[
    {id:'e6',name:'Straight Arm Pull Down',equip:'Cable',muscle:'back',sets:4,reps:'12',w:true},
    {id:'e7',name:'Row, One Arm, Standing',equip:'Cable',muscle:'back',sets:4,reps:'10',w:true}
  ]),
  single({id:'e8',name:'Chin Up',equip:'Other',muscle:'back',sets:4,reps:'5-10',w:false,note:'Use assisted if needed'}),
  single({id:'e9',name:'Leg Raise, Chair',equip:'Other',muscle:'core',sets:4,reps:'15',w:false}),
  single({id:'e10',name:'Sit Up, Twist, Decline',equip:'Floor',muscle:'core',sets:3,reps:'10',w:false}),
  single({id:'e11',name:'Side Bends, Dumbbell',equip:'Free Weights',muscle:'core',sets:3,reps:'15',w:true}),
  single({id:'e12',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'3 mi',w:false,timed:true,cardio:true,target:3,unit:'mi'})
]}
  ],
  p4: [
{id:'s1', title:'Strength', accent:'arms', items:[
  superset('sup1',4,[
    {id:'e1',name:'Knee Raise, Hanging',equip:'Other',muscle:'core',sets:4,reps:'10-15',w:false},
    {id:'e2',name:'Push Up, T',equip:'Floor',muscle:'chest',sets:4,reps:'10',w:false}
  ]),
  superset('sup2',3,[
    {id:'e3',name:'Burpee, Kettlebell',equip:'Free Weights',muscle:'cardio',sets:3,reps:'10',w:false},
    {id:'e4',name:'Plank',equip:'Floor',muscle:'core',sets:3,reps:'30 sec',w:false,timed:true,target:30,unit:'sec'}
  ]),
  single({id:'e5',name:'Squat',equip:'Barbell/Rack',muscle:'legs',sets:5,reps:'10-15',w:true,note:'Lighter weight, full range of motion. Little rest here - breathe during the exercise!'}),
  single({id:'e6',name:'Bench Press',equip:'Bench',muscle:'chest',sets:4,reps:'15',w:true}),
  single({id:'e7',name:'Shoulder Press, Dumbbell, Standing',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'10-15',w:true}),
  single({id:'e8',name:'BB Bent Over Row',equip:'Barbell/Rack',muscle:'back',sets:4,reps:'10-12',w:true}),
  single({id:'e9',name:'BB Lunge',equip:'Barbell/Rack',muscle:'legs',sets:3,reps:'20',w:true,note:'10 per leg'}),
  superset('sup3',3,[
    {id:'e10',name:'Push Up, Military Press',equip:'Floor',muscle:'shoulders',sets:3,reps:'15',w:false},
    {id:'e11',name:'Crunch, Jack Knife, Bent Knees',equip:'Floor',muscle:'core',sets:3,reps:'15',w:false},
    {id:'e12',name:'Sit Up, Frog',equip:'Floor',muscle:'core',sets:3,reps:'12',w:false}
  ])
]},
{id:'s2', title:'FST-7 Upper', accent:'chest', items:[
  single({id:'e1',name:'Treadmill, Power Walk',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min',note:'Min speed 2.5 mph, min incline 5'}),
  single({id:'e2',name:'Bench Press, Dumbbell',equip:'Free Weights',muscle:'chest',sets:4,reps:'12',w:true}),
  single({id:'e3',name:'Chest Press',equip:'Cable',muscle:'chest',sets:4,reps:'10',w:true}),
  single({id:'e4',name:'Bench Press, Incline',equip:'Bench',muscle:'chest',sets:7,reps:'15',w:true}),
  superset('sup1',4,[
    {id:'e5',name:'Row, Tripod, Dumbbell',equip:'Free Weights',muscle:'back',sets:4,reps:'10',w:true},
    {id:'e6',name:'Shrug, Dumbbell',equip:'Free Weights',muscle:'back',sets:4,reps:'12',w:true}
  ]),
  single({id:'e7',name:'Pull Down, Wide Grip',equip:'Cable',muscle:'back',sets:7,reps:'15',w:true}),
  single({id:'e8',name:'Bicep Curl, Standing, Dumbbell',equip:'Free Weights',muscle:'arms',sets:4,reps:'10',w:true}),
  single({id:'e9',name:'Hammer Curl, Standing',equip:'Free Weights',muscle:'arms',sets:3,reps:'10',w:true}),
  single({id:'e10',name:'Bicep Curl, Ez Bar',equip:'Free Weights',muscle:'arms',sets:7,reps:'15',w:true})
]},
{id:'s3', title:'FST-7 Lower', accent:'legs', items:[
  single({id:'e1',name:'Bike',equip:'Machine',muscle:'cardio',sets:1,reps:'10 min',w:false,timed:true,cardio:true,target:10,unit:'min'}),
  single({id:'e2',name:'Leg Press',equip:'Machine',muscle:'legs',sets:7,reps:'15',w:true}),
  superset('sup1',3,[
    {id:'e3',name:'Goblet Squat, Dumbbell',equip:'Free Weights',muscle:'legs',sets:3,reps:'10',w:true},
    {id:'e4',name:'Leg Raise, Floor',equip:'Floor',muscle:'core',sets:3,reps:'10',w:false}
  ]),
  single({id:'e5',name:'Leg Extension',equip:'Machine',muscle:'legs',sets:7,reps:'15',w:true}),
  single({id:'e6',name:'Leg Curl, Lying',equip:'Machine',muscle:'legs',sets:4,reps:'10',w:true}),
  superset('sup2',3,[
    {id:'e7',name:'Walking Lunge, Dumbbell',equip:'Free Weights',muscle:'legs',sets:3,reps:'20',w:true},
    {id:'e8',name:'Sit Up, Frog',equip:'Floor',muscle:'core',sets:3,reps:'12',w:false}
  ]),
  superset('sup3',4,[
    {id:'e9',name:'Glute Bridge, Banded',equip:'Floor',muscle:'legs',sets:4,reps:'15',w:false},
    {id:'e10',name:'Heel Touches, Lying, Alternating',equip:'Floor',muscle:'core',sets:4,reps:'20',w:false},
    {id:'e11',name:'Abdominal Air Bike',equip:'Floor',muscle:'core',sets:4,reps:'30',w:false,note:'AKA bicycle'}
  ])
]},
{id:'s4', title:'Chest, Back & Abs', accent:'chest', items:[
  superset('sup1',4,[
    {id:'e1',name:'Russian Twist',equip:'Floor',muscle:'core',sets:4,reps:'25',w:false},
    {id:'e2',name:'Mountain Climber, Rotating',equip:'Floor',muscle:'core',sets:4,reps:'25',w:false}
  ]),
  single({id:'e3',name:'Fly, Standing',equip:'Cable',muscle:'chest',sets:5,reps:'10-15',w:true}),
  single({id:'e4',name:'Chin Up',equip:'Other',muscle:'back',sets:4,reps:'5-10',w:false}),
  superset('sup2',4,[
    {id:'e5',name:'Bench Press, Dumbbell, Squeeze',equip:'Free Weights',muscle:'chest',sets:4,reps:'10',w:true},
    {id:'e6',name:'Pullover, Dumbbell',equip:'Free Weights',muscle:'back',sets:4,reps:'12',w:true}
  ]),
  superset('sup3',4,[
    {id:'e7',name:'Straight Arm Pull Down',equip:'Cable',muscle:'back',sets:4,reps:'12',w:true},
    {id:'e8',name:'Face Pull',equip:'Cable',muscle:'back',sets:4,reps:'15',w:true}
  ]),
  single({id:'e9',name:'Push Up',equip:'Floor',muscle:'chest',sets:3,reps:'20',w:false,note:'20 reps or failure'}),
  superset('sup4',4,[
    {id:'e10',name:'Leg Raise, Hanging',equip:'Other',muscle:'core',sets:4,reps:'10-15',w:false},
    {id:'e11',name:'Side Plank',equip:'Floor',muscle:'core',sets:4,reps:'15 sec',w:false,timed:true,target:15,unit:'sec'}
  ])
]},
{id:'s5', title:'Shoulders, Arms & Abs', accent:'shoulders', items:[
  superset('sup1',3,[
    {id:'e1',name:'Lateral Raise, Dumbbell',equip:'Free Weights',muscle:'shoulders',sets:3,reps:'15',w:true},
    {id:'e2',name:'Split Jump Squat',equip:'Other',muscle:'legs',sets:3,reps:'20',w:false}
  ]),
  superset('sup2',3,[
    {id:'e3',name:'Rear Delt Fly, Bent Over, Standing, Dumbbell',equip:'Free Weights',muscle:'shoulders',sets:3,reps:'15',w:true},
    {id:'e4',name:'Stretch, Front Delt',equip:'Floor',muscle:'shoulders',sets:3,reps:'15 sec',w:false,timed:true,target:15,unit:'sec'}
  ]),
  single({id:'e5',name:'Shoulder To Shoulder Press',equip:'Machine',muscle:'shoulders',sets:4,reps:'12',w:true}),
  superset('sup3',3,[
    {id:'e6',name:'Bicep Curl, Zottman',equip:'Free Weights',muscle:'arms',sets:3,reps:'10',w:true},
    {id:'e7',name:'Hammer Curl, Standing',equip:'Free Weights',muscle:'arms',sets:3,reps:'10',w:true}
  ]),
  single({id:'e8',name:'Tricep Extension, Rope',equip:'Cable',muscle:'arms',sets:3,reps:'15',w:true}),
  superset('sup4',3,[
    {id:'e9',name:'Dip, Tricep',equip:'Other',muscle:'arms',sets:3,reps:'10',w:false},
    {id:'e10',name:'Toe Touch, Straight Leg, Weighted',equip:'Free Weights',muscle:'core',sets:3,reps:'10-15',w:true}
  ]),
  superset('sup5',3,[
    {id:'e11',name:'Tricep Extension, Ez Bar, Overhead, Standing',equip:'Free Weights',muscle:'arms',sets:3,reps:'12',w:true},
    {id:'e12',name:'Bicep Curl, Ez Bar',equip:'Free Weights',muscle:'arms',sets:3,reps:'10',w:true}
  ]),
  superset('sup6',4,[
    {id:'e13',name:'Sit Up, Twist, Decline',equip:'Floor',muscle:'core',sets:4,reps:'20',w:false},
    {id:'e14',name:'Front Raise, Plate',equip:'Free Weights',muscle:'shoulders',sets:4,reps:'10',w:true}
  ])
]}
  ]
};

function buildMasterExerciseDB(){
  var byMuscle = {};
  Object.keys(PHASES).forEach(function(pk){
    (PHASES[pk] || []).forEach(function(s){
      (s.items || []).forEach(function(it){
        var exs = it.type === 'single' ? [it.ex] : (it.subs || []);
        exs.forEach(function(ex){
          if(!ex || !ex.muscle || !ex.name) return;
          if(!byMuscle[ex.muscle]) byMuscle[ex.muscle] = {};
          byMuscle[ex.muscle][ex.name] = true;
        });
      });
    });
  });
  var out = {};
  Object.keys(byMuscle).forEach(function(m){ out[m] = Object.keys(byMuscle[m]).sort(); });
  return out;
}
const MASTER_EXERCISE_DB = buildMasterExerciseDB();
