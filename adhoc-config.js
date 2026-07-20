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
  { key:'upper',     label:'Upper' },
  { key:'chest',     label:'Chest' },
  { key:'back',      label:'Back' },
  { key:'shoulders', label:'Shoulders' },
  { key:'arms',      label:'Biceps' },
  { key:'legs',      label:'Legs' },
  { key:'lower',     label:'Lower' },
  { key:'core',      label:'Core' }
];

var FOCUS_WORKOUTS = {
  full:      ['p2 | Full Body', 'p4 | Strength', 'p3 | Conditioning Work'],
  onlydumbs: [],
  upper:     ['p1 | Full Upper', 'p4 | Upper'],
  chest:     ['p1 | Chest & Triceps', 'p2 | Chest & Biceps', 'p3 | Chest & Arms', 'p4 | Upper', 'p4 | Chest, Back & Abs'],
  back:      ['p1 | Back & Abs', 'p2 | Back & Triceps', 'p3 | Back & Abs', 'p4 | Chest, Back & Abs'],
  shoulders: ['p1 | Shoulders & Biceps', 'p2 | Shoulders & Abs', 'p3 | Shoulders & Squats', 'p4 | Shoulders, Arms & Abs'],
  arms:      ['p1 | Shoulders & Biceps', 'p2 | Chest & Biceps', 'p3 | Chest & Arms', 'p4 | Shoulders, Arms & Abs', 'p4 | Strength'],
  legs:      ['p1 | Legs', 'p2 | Legs', 'p3 | Legs (High Volume)', 'p4 | Lower'],
  lower:     ['p4 | Lower', 'p1 | Legs', 'p2 | Legs', 'p3 | Legs (High Volume)'],
  core:      ['p1 | Back & Abs', 'p2 | Shoulders & Abs', 'p3 | Back & Abs', 'p4 | Chest, Back & Abs', 'p4 | Shoulders, Arms & Abs']
};
