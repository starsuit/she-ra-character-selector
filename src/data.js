const characters = {
  adora: {
    name: "Adora",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a4/AdoraRender.png/revision/latest?cb=20181030172527",
    skills: ["Transforms into She-Ra", "Shapeshifting Sword"],
    runestone: "Portal runestone housed in the Sword of Protection",
    allegiance: "The Rebellion"
  },
  "she-ra": {
    name: "She-Ra",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/1/1e/She-RaRender_2.png/revision/latest?cb=20181108160017",
    skills: [
      "Super-strength",
      "Shapeshifting Sword",
      "Limited healing powers",
      "Connection to the ancient First Ones of Etheria"
    ],
    runestone: "Portal runestone housed in the Sword of Protection",
    allegiance: "The Rebellion"
  },

  bow: {
    name: "Bow",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/f/fe/BowRender_2.png/revision/latest?cb=20181108160046",
    skills: ["Archery", "Weapons and technology"],
    allegiance: "The Rebellion"
  },

  catra: {
    name: "Catra",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a8/CatraRender_2.png/revision/latest?cb=20181108160705",
    skills: [
      "Catlike instincts",
      "Strength and agility",
      "Heightened balance and hearing",
      "Able to see in the dark"
    ],
    allegiance: "The Horde"
  },

  entrapta: {
    name: "Entrapta",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/9/95/EntraptaRender.png/revision/latest?cb=20181231182405",
    skills: ["Tech genius", "Inventor", "Prehensile hair"],
    allegiance: "The Horde",
    runestone: "N/A"
  },

  frosta: {
    name: "Frosta",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/3/3d/FrostaRender.png/revision/latest?cb=20181108001210",
    skills: ["Ice, frost, and snow powers", "Create structures made of ice"],
    runestone: "The Fractal Flake",
    allegiance: "The Rebellion"
  },
  glimmer: {
    name: "Glimmer",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/3/34/GlimmerRender.png/revision/latest?cb=20181030172619",
    skills: ["Teleportation", "Photokinesis"],
    runestone: "The Moonstone",
    allegiance: "The Rebellion"
  },
  hordak: {
    name: "Lord Hordak",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/d/d8/HordakRender.png/revision/latest?cb=20181112000836",
    skills: [
      "Brilliant technological mind",
      "Super strength powered by First Ones tech-powered armor"
    ],
    allegiance: "The Horde"
  },
  mermista: {
    name: "Mermista",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/8/80/MermistaRender.png/revision/latest?cb=20181219133336",
    skills: ["Controlls water"],
    runestone: "The Pearl",
    allegiance: "The Rebellion"
  },
  netossa: {
    name: "Netossa",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/a/a7/NetossaRender.png/revision/latest?cb=20181107222811",
    skills: ["Conjures energy nets"],
    runestone: "N/A",
    allegiance: "The Rebellion"
  },
  perfuma: {
    name: "Perfuma",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/6/69/PerfumaRender.png/revision/latest?cb=20181030172706",
    skills: ["Grows and controls plants"],
    runestone: "The Heart-Blossom",
    allegiance: "The Rebellion"
  },
  scorpia: {
    name: "Scorpia",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/7/7f/ScorpiaRender.png/revision/latest?cb=20181107222821",
    skills: ["Super-strength"],
    runestone: "The Black Garnet",
    allegiance: "The Horde"
  },
  "sea-hawk": {
    name: "Sea Hawk",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/7/70/SeahawkRender.png/revision/latest?cb=20181115215124",
    skills: [
      "Pirate charmer",
      "Singer of sea shanties",
      "Mediocre arm wrestler"
    ],
    allegiance: "The Rebellion"
  },
  "shadow-weaver": {
    name: "Shadow Weaver",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/5/5a/ShadowWeaverRender.png/revision/latest?cb=20181110164353",
    skills: ["Sorcery", "Controls shadows", "Creates shadow constructs"],
    runestone: "The Black Garnet",
    allegiance: "The Horde"
  },
  spinnerella: {
    name: "Spinnerella",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/7/7e/SpinnerellaRender_2.png/revision/latest?cb=20181108160204",
    skills: ["Controls air and wind", "Creates cyclones by spinning"],
    runestone: "N/A",
    allegiance: "The Rebellion"
  },
  "swift-wind": {
    name: "Swift Wind",
    image:
      "https://vignette.wikia.nocookie.net/shera-and-the-princesses-of-power/images/8/83/SwiftWindRender.png/revision/latest/scale-to-width-down/620?cb=20181109165949",
    skills: ["Flight", "Speed", "Speaking his mind"],
    allegiance: "The Rebellion"
  }
};

const characterNames = Object.keys(characters);

export { characters, characterNames };
