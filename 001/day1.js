
$:setcpm(150/4)
//drums 
$:sound("lt bd*2 lt:1 lt:1, casio  - - rim")
  .bank("RhythmAce").delay(0.5)
//bassline
$:note(`
<[g1 g1 ab1 bb1]!3 [- bb1 ab1 g1]>`)
  .sound("gm_fretless_bass, wt_digital_bad_day")
  .lpf(500)._punchcard().color("#302263")

//back
$: note("b [b b] - [- b]").scale("Ab:major").trans(-12)
  .sound("sawtooth").vowel("i").pan(rand)

//lead
$:note("< 2 2  0 0>*4".add("4 5")).scale("Ab:major")
  .sound("tri").pan(rand).adsr(".1:.8:.2:0")

$:note("< 5 4 5 3>*8".add("0 2 4")).scale("Ab:major")
  .sound("gm_lead_4_chiff").adsr(".1:.3:.5:.075").lpf(600)._scope().color("cyan")

