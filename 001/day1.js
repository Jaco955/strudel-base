$:setcpm(150/4)
//drums 
$:sound("lt bd*2 lt:1 lt:1, casio  - - [<rim rim rim sd>]")
  .bank("RhythmAce").delay(0.5)
//bassline
$:note(`
<[g2 g2 ab2 bb2]!3 [- bb2 ab2 g2]>`)
  .sound("gm_fretless_bass, wt_digital_bad_day")
  .lpf(500)._pianoroll(10)
