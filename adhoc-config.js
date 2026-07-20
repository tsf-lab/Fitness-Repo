/* =====================================================================
   AD HOC CONFIG - controls the focus chips and which workouts appear.

   FOCUS_CHIPS: the chips shown, in order. Edit label, reorder, add or
   remove. `key` sets the chip colour (legs/chest/back/shoulders/arms/
   core/cardio have colours; any other key shows a neutral colour).

   FOCUS_WORKOUTS: under each chip key, list the workouts to show, each
   as 'phase | Workout title'. A workout may be listed under MORE THAN
   ONE chip. Only chips that have at least one workout are shown.

   ALL AVAILABLE WORKOUTS (copy these exactly):
     p1 | Legs   [now under: legs]
     p1 | Chest & Triceps   [now under: chest]
     p1 | Back & Abs   [now under: back]
     p1 | Shoulders & Biceps   [now under: shoulders]
     p1 | Full Upper   [now under: arms]
     p2 | Chest & Biceps   [now under: chest]
     p2 | Back & Triceps   [now under: back]
     p2 | Shoulders & Abs   [now under: shoulders]
     p2 | Legs   [now under: legs]
     p2 | Full Body   [now under: arms]
     p3 | Legs (High Volume)   [now under: legs]
     p3 | Chest & Arms   [now under: chest]
     p3 | Conditioning Work   [now under: cardio]
     p3 | Shoulders & Squats   [now under: shoulders]
     p3 | Back & Abs   [now under: back]
     p4 | Strength   [now under: arms]
     p4 | Upper   [now under: chest]
     p4 | Lower   [now under: legs]
     p4 | Chest, Back & Abs   [now under: chest]
     p4 | Shoulders, Arms & Abs   [now under: shoulders]
   ===================================================================== */

var FOCUS_CHIPS = [
  { key:'full',      label:'Full' },
  { key:'onlydumbs', label:'OnlyDumbs' },
  { key:'chest',     label:'Chest' },
  { key:'back',      label:'Back' },
  { key:'shoulders', label:'Shoulders' },
  { key:'arms',      label:'Biceps' },
  { key:'legs',      label:'Legs' },
  { key:'core',      label:'Core' }
];

var FOCUS_WORKOUTS = {
  full:      ['p2 | Full Body', 'p4 | Strength', 'p1 | Full Upper', 'p4 | Upper', 'p3 | Conditioning Work'],
  onlydumbs: ['p5 | DB Push Day', 'p5 | DB Pull Day', 'p5 | DB Blaster (Full Body)'],
  chest:     ['p1 | Chest & Triceps', 'p2 | Chest & Biceps', 'p3 | Chest & Arms', 'p4 | Upper', 'p4 | Chest, Back & Abs', 'p5 | DB Push Day', 'p5 | Chest Big Push', 'p5 | Chest Best Day', 'p5 | Chest All the Angles'],
  back:      ['p1 | Back & Abs', 'p2 | Back & Triceps', 'p3 | Back & Abs', 'p4 | Chest, Back & Abs', 'p5 | DB Pull Day', 'p5 | Back & Biceps Blast', 'p5 | Back & Biceps Annihilation', 'p5 | Wings Day (Back and Biceps)'],
  shoulders: ['p1 | Shoulders & Biceps', 'p2 | Shoulders & Abs', 'p3 | Shoulders & Squats', 'p4 | Shoulders, Arms & Abs', 'p5 | Boulder Shoulders', 'p5 | Arm Push (Shoulders & Tris)', 'p5 | No Needs Sleeves (Shoulders & Tris)'],
  arms:      ['p1 | Shoulders & Biceps', 'p2 | Chest & Biceps', 'p3 | Chest & Arms', 'p4 | Shoulders, Arms & Abs', 'p4 | Strength', 'p5 | Biceppies', 'p5 | Back & Biceps Blast', 'p5 | Back & Biceps Annihilation', 'p5 | Wings Day (Back and Biceps)', 'p5 | DB Pull Day', 'p5 | Arm Push (Shoulders & Tris)'],
  legs:      ['p1 | Legs', 'p2 | Legs', 'p3 | Legs (High Volume)', 'p4 | Lower', 'p5 | Leg Annihilation', 'p5 | Legs for Days', 'p5 | Legs Posterior Peach Focus', 'p5 | Booty - Thick Thighs save Lives'],
  core:      ['p1 | Back & Abs', 'p2 | Shoulders & Abs', 'p3 | Back & Abs', 'p4 | Chest, Back & Abs', 'p4 | Shoulders, Arms & Abs', 'p5 | Bulletproof Core']
};
