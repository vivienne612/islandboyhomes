/* ============================================================
   Island Boy Homes — property data
   All content, links and images are pulled from the live site
   (islandboyhomes.com). Only the presentation is redesigned.
   ============================================================ */

// Helper to build a clean, higher-resolution Wix image URL.
// Local, self-hosted images (downloaded from the original Wix media library into assets/img).
// PNG sources were converted to JPEG, so png ids resolve to .jpg.
function wix(id, ext) {
  ext = ext === 'png' ? 'jpg' : ext;
  return `assets/img/${id}~mv2.${ext}`;
}

// Full gallery image from a media id like "bedd29_abc~mv2.jpg"
function gimg(fullId) {
  return 'assets/img/' + fullId.replace(/\.png$/, '.jpg');
}

const BOOK_URL = 'https://book.islandboyhomes.com/';
const WA_URL = 'https://wa.me/6285921090468?utm_source=islandboyhomes&utm_medium=website&utm_campaign=general_inquiry&utm_content=viewing';

const PROPERTIES = [
  /* ---------------------- ACTIVE HOMES ---------------------- */
  {
    slug: 'islandboyguesthousekt',
    name: 'Island Boy Guesthouse',
    sub: 'Kayu Tulang',
    region: 'Canggu',
    location: 'Kayu Tulang, Canggu',
    specs: '1 BR · 1 En-suite Bath',
    beds: 1, baths: 1,
    tenure: ['Daily', 'Monthly'],
    status: 'available',
    statusLabel: 'Rooms Available',
    href: 'https://www.islandboyhomes.com/islandboyguesthousekt',
    cta: 'book',
    description: "Island Boy Guesthouse Kayu Tulang is just a few minutes drive from Batu Bolong beach (even faster by scooter!) and just steps away from quaint Canggu restaurants, coffee shops, spas, and bars, including Teratai, Canggu's latest big retail development. You will have the luxury of convenience, being within arms reach of Bali's best!",
    images: [
      'bedd29_2278cc0c08df493db1cca7da30af325b~mv2.jpeg',
      'bedd29_ea7793c33a17427b9288cde4c8da8fc5~mv2.jpg',
      'bedd29_18858aab95dd4c9bb3d34250174f0fad~mv2.jpg',
      'bedd29_d6410d358ffa4eb3b2faf85cfa434f08~mv2.jpg',
      'bedd29_e6d26ea2fa734d15828bcfacc63c8fd2~mv2.jpg',
      'bedd29_437478f29eb34a8ba36ee08239b96a22~mv2.jpg',
      'bedd29_3b63eb3aae004af299cfc1140987413e~mv2.jpg',
      'bedd29_9910402e427345ebb34fffcea9b831b1~mv2.jpg',
      'bedd29_6b1805d4f0ed4bc2aa2c195f7d874be5~mv2.jpg',
      'bedd29_5fe848f975eb4d1eabe6d2ea8917bea4~mv2.jpg',
      'bedd29_a10b42893817499a80223d026b121661~mv2.jpg',
      'bedd29_662dfce158f04cc1b6d19ce70caaa11a~mv2.jpg',
      'bedd29_4df3138ede3242acb7632bbc7e254656~mv2.jpg'
    ].map(gimg),
    thumb: wix('bedd29_2278cc0c08df493db1cca7da30af325b', 'jpeg', 900, 1100),
    features: [
      ['Bedrooms', '1'], ['Living', 'Shared'], ['Kitchen', '1'], ['Smart TV', 'Yes'],
      ['Pool', 'Shared'], ['Parking', 'Shared'], ['Wifi', 'Up to 150 mbps'], ['Floors', '2']
    ],
    neighborhood: [
      ['Beach (Black Sand)', '7 min'], ['Bali Social Club', '1 min walk'],
      ['Crate Cafe', '3 min'], ['Brewery', '2 min'], ['Airport', '45 min']
    ]
  },
  {
    slug: 'casanova',
    name: 'Casa Nova — Suites',
    sub: 'Pererenan',
    region: 'Pererenan',
    location: 'Pererenan',
    specs: '1 BR · 1 En-suite Bath',
    beds: 1, baths: 1,
    tenure: ['Daily', 'Monthly'],
    status: 'available',
    statusLabel: 'Rooms Available',
    href: 'https://www.islandboyhomes.com/casanova',
    cta: 'book',
    description: "Casa Nova is just 15 minutes walk from Pererenan Beach. Inside, you'll find a spacious open-plan living area, a fully equipped kitchen, and a cozy yet refined master bedroom with an ensuite. Thoughtful touches like a personal mini-fridge and calming design details make it feel like home. Step outside and cool off in the shared swimming pool, just a few steps from your door.",
    images: [
      // Bedroom
      'bedd29_11371a7a816b4f1babc13e5938e9a2f3~mv2.jpg',
      'bedd29_3229c6e65a0945409e1eda649d690a1c~mv2.jpg',
      'bedd29_0dca9922299343c7bb2567ef44c4c72a~mv2.jpg',
      'bedd29_db9057f4ff9c440ab417898597ff66d8~mv2.jpg',
      'bedd29_368fdead82214126aaab2cb67eac8996~mv2.jpg',
      'bedd29_6f00fc680f154894a3e9d284177a4cd2~mv2.jpg',
      'bedd29_903a80e5b2294465881a8ae4f0ceaae4~mv2.jpg',
      'bedd29_84cc6e37b7cd4544b1d8f4543462ee5b~mv2.jpg',
      'bedd29_e1a6561f94444aba89a5bd44fb76751a~mv2.jpg',
      // Bathroom
      'bedd29_8891df5f8b33437ab5e24fefe79ce905~mv2.jpg',
      'bedd29_e8bbffa10fb441bea2a6400956ef259d~mv2.jpg',
      'bedd29_661204d808954e23a3a3e770482920e4~mv2.jpg',
      'bedd29_38a13c1880264c64bfe5527ebeb0d7f1~mv2.jpg',
      'bedd29_d734f48872b84aa1a5a51a8c43e6f539~mv2.jpg',
      'bedd29_ef2d660f0a0d4fefa10e0419c0e8d3cb~mv2.jpg',
      'bedd29_fd2ea702e801411dbd617a02c3a4ac61~mv2.jpg',
      // Kitchen & living
      'bedd29_7a19a4d41dc34a03a82f159851acf330~mv2.jpg',
      'bedd29_3a0cadff308140cd8d0e8c300658b256~mv2.jpg',
      'bedd29_1989664697c142b18f420372b1675939~mv2.jpg',
      'bedd29_91dee499e0d546b4b69ed38003e05ae3~mv2.jpg',
      'bedd29_4f2ab4ad72e4466db7940dd27aa10f3a~mv2.jpg',
      'bedd29_e6901a45d1ab48939f0117dc01279925~mv2.jpg',
      'bedd29_69da11d920204cfb894b8669f6c2087b~mv2.jpg',
      // Outdoor
      'bedd29_27b281b52e6f4f2d911f34650f3f7f3d~mv2.jpg',
      'bedd29_eeabb7730e3541e7b06fdb88c3b7e660~mv2.jpg'
    ].map(gimg),
    thumb: wix('bedd29_a8b82d14fe4d48149de51d2fdc3e1502', 'jpg', 900, 1100),
    features: [
      ['Bedrooms', '1'], ['Living', 'Shared'], ['Kitchen', '1'], ['Smart TV', 'Yes'],
      ['Pool', 'Shared'], ['Parking', 'Shared'], ['Wifi', 'Up to 150 mbps'], ['Floors', '1']
    ],
    neighborhood: [
      ['Beach', '3 min'], ['Ettore Gelato', '1 min'], ['Shelter', '1 min'],
      ['Wrong Gym', '2 min'], ['Woods', '1 min']
    ]
  },
  {
    slug: 'ib-bb',
    name: 'Island Boy Guesthouse',
    sub: 'Batu Bolong',
    region: 'Canggu',
    location: 'Batu Bolong, Canggu',
    specs: '1 BR · 1 En-suite Bath',
    beds: 1, baths: 1,
    tenure: ['Daily', 'Monthly'],
    status: 'available',
    statusLabel: 'Rooms Available',
    href: 'https://www.islandboyhomes.com/ib-bb',
    cta: 'book',
    description: "Island Boy Guesthouse Batu Bolong is located just a few minutes walk from the infamous Batu Bolong street, and just steps away from quaint Canggu restaurants, coffee shops, spas, and bars. You will have the luxury of convenience, being within arms reach of Bali's best!",
    images: [
      // Bedroom
      'bedd29_f44cc38f3ad94bd78841f6a61145568c~mv2.jpg',
      'bedd29_d702edcdb76445459c20b53845199109~mv2.jpg',
      'bedd29_82c156af433544069b6d1a9218ed0131~mv2.jpg',
      'bedd29_f3cdf946953149f3b532d0f374508adb~mv2.jpg',
      // Bathroom
      'bedd29_6966d17c1d79489fbba857ce8c73e12f~mv2.jpg',
      // Kitchen
      'bedd29_a186e0f15eaa4308a33507da9b945cad~mv2.jpg',
      'bedd29_9c43369690b44ab1acba7215dc653747~mv2.jpg',
      'bedd29_ec10a31eb4e64584a8e741136512701d~mv2.jpg',
      'bedd29_5d8d2cf3ab6f4b54b7478ec326271308~mv2.jpg',
      // Outdoor
      'bedd29_1693c5c66e1946a4bfa28e279715b473~mv2.jpg',
      'bedd29_00d8faa51fd94fcea02500a0409f82b0~mv2.jpg',
      'bedd29_6e1d2538edaa44ffbeac21c2eb182e79~mv2.jpg',
      'bedd29_544cb6ca240e42718f89f1e9bcb39e30~mv2.jpg',
      'bedd29_39af43a5adf148e5a153748d8ca8edf0~mv2.jpg',
      'bedd29_d0a6e23439e242f49bddab11ee3348dd~mv2.jpg',
      'bedd29_f9f8ca842c77404bb1109e33a061a374~mv2.jpg'
    ].map(gimg),
    thumb: wix('bedd29_f44cc38f3ad94bd78841f6a61145568c', 'jpg', 900, 1100),
    features: [
      ['Bedrooms', '1'], ['Living', 'Shared'], ['Kitchen', '1'], ['Smart TV', 'Yes'],
      ['Pool', 'Shared'], ['Parking', 'Shared'], ['Wifi', 'Up to 150 mbps'], ['Floors', '2']
    ],
    neighborhood: [
      ['Beach', '7 min'], ['Love Anchor', '1 min'], ['Revolver', '2 min'],
      ['Motel Mexicola', '4 min'], ['Airport', '45 min']
    ]
  },
  {
    slug: 'casa-camilla',
    name: 'Casa Camilla',
    sub: 'Jimbaran',
    region: 'Jimbaran',
    location: 'Puri Gading, Jimbaran',
    specs: '3 BR · 3 BA · Fully Furnished',
    beds: 3, baths: 3,
    tenure: ['Leasehold', '25 Years'],
    status: 'leasehold',
    statusLabel: 'Leasehold · 25 Years',
    href: 'https://www.islandboyhomes.com/casa-camilla',
    cta: 'viewing',
    pricing: [['Freehold', 'Rp 4 Billion'], ['Leasehold (25 Years)', 'Rp 2.5 Billion']],
    description: "Located in the prime neighbourhood of Puri Gading in Jimbaran, this 3 bedroom villa sits in a quiet neighbourhood yet has close access to the beach, supermarkets, cafes and restaurants. With its aesthetic curved doors and wooden accents, this villa makes the perfect investment for daily rentals on Airbnb and a cozy vacation home of your own.",
    images: [
      // Bedroom
      'bedd29_effe8800bffb41848ca2962a91b09175~mv2.jpg',
      'bedd29_2981ddb23d5a4f31a0466f6b33783e09~mv2.jpg',
      'bedd29_32515a19ca1946eba6320e20518bfdc8~mv2.jpg',
      // Bathroom
      'bedd29_7719e7787c8444f3b44fba6abc9fed25~mv2.jpg',
      'bedd29_257d2dc2898b43338e0b739484efc99d~mv2.jpg',
      'bedd29_5c2c3eb935d5422f88aeff2924361a6d~mv2.jpg',
      'bedd29_f533093def174434893fa699716b7231~mv2.jpg',
      // Kitchen & living
      'bedd29_2cc4b330aae04b64a66d6b719d515edd~mv2.jpg',
      'bedd29_acb82c1fdceb4bb193e6c7371d27e1e2~mv2.jpg',
      'bedd29_db86d71443fc4a88adad31d80c014f03~mv2.jpg',
      'bedd29_193ff68c09244baeb82b190cd8ae9adf~mv2.jpg',
      'bedd29_7fe9c634093d40c29a68254c24d2879e~mv2.jpg',
      // Outdoor
      'bedd29_1d1bba2dc58c4b418d773331c020d1a3~mv2.jpg',
      'bedd29_ffe3bcaa695e4c40b7c535d06ff546af~mv2.jpg',
      'bedd29_ecc4d0317ea9482990c7483c5ad8ecb7~mv2.jpg',
      'bedd29_cd1a59aa3db242c3bf617018a8af3aee~mv2.jpg',
      'bedd29_310ad6a52d0c40e5ab89aae1fef7aa75~mv2.jpg'
    ].map(gimg),
    thumb: wix('bedd29_af60056d6e864b258627b29cba6fedc5', 'png', 900, 1100),
    features: [
      ['Bedrooms', '3'], ['Living', 'Open Living'], ['Furnished', 'Fully'], ['View', 'Pool'],
      ['Pool', 'Yes'], ['Parking', 'Private'], ['Land Size', '200 m²'], ['Floors', '1']
    ],
    neighborhood: [
      ['Beach', '9 min'], ['Pepito', '7 min'], ['GWK', '9 min'],
      ['Ayana Rock Bar', '12 min'], ['Airport', '20 min']
    ]
  },
  {
    slug: 'islandboyguesthousepantailima',
    name: 'Island Boy Guesthouse',
    sub: 'Pantai Lima',
    region: 'Canggu',
    location: 'Pantai Lima',
    specs: '1 BR · 1 En-suite Bath',
    beds: 1, baths: 1,
    tenure: ['Daily', 'Monthly'],
    status: 'available',
    statusLabel: 'Rooms Available',
    href: 'https://www.islandboyhomes.com/islandboyguesthousepantailima',
    cta: 'book',
    description: "Island Boy Guesthouse – Pantai Lima is just a 5 minutes walk from the beautiful black-sand shores of Pantai Lima Beach, or only 1 minute by scooter. Tucked in a peaceful neighborhood, the guesthouse offers a quiet and relaxing stay while still being just a short ride from Canggu and Pererenan's best restaurants, coffee shops, spas, and beach clubs.",
    images: [
      // Bedroom
      'bedd29_80d8564290c541d198d285298e251da4~mv2.jpg',
      'bedd29_c38d0cce59af4c30ab1c1a1197b52450~mv2.jpg',
      'bedd29_58b9f5520e0443a192d5fff78a8c2aed~mv2.jpg',
      'bedd29_cbd93f81d9f24f7ba9986c19ef599b48~mv2.jpg',
      'bedd29_a1d714ebbf334c5abed52a2fa90c400c~mv2.png',
      // Bathroom
      'bedd29_aa3b5fb2bf1b4e1c9f094b7e4841bce7~mv2.jpg',
      'bedd29_96945cb36ec341789b9562216da65b63~mv2.jpg',
      'bedd29_b5a0ddfc27054a35ae73d1bc3dd4ee18~mv2.jpg',
      // Kitchen
      'bedd29_a9ca3dcd20f74f2aa500e49d33acc63b~mv2.jpg',
      'bedd29_9eb890a442f24955b688c3964d48c5d6~mv2.png',
      'bedd29_cc0671d53b7a4750aca182f6b7596e6f~mv2.png',
      'bedd29_ebb572b97a2a441888f2a6897ff073d8~mv2.png',
      'bedd29_ac1fdec984fc482f9ff1ef8cac9bb2ce~mv2.png',
      // Outdoor
      'bedd29_791fd01667734cd38c409e145f8d64af~mv2.jpg',
      'bedd29_aae4f78a59c3498289e1e8c71474454f~mv2.jpg',
      'bedd29_6272437f55054a7ca9d372dc0bce0a14~mv2.jpg',
      'bedd29_10a215af63f645f3b8879f307cb8cb2b~mv2.jpg',
      'bedd29_ef251efd836b4d508813aa5aed34234d~mv2.jpg',
      'bedd29_7acb09dc5fad4eec887be79d3a9c6150~mv2.png',
      'bedd29_69136337bd134193acd6bf31b1a4d35e~mv2.png',
      'bedd29_5819b7b5c57847279e8011a07317624a~mv2.png',
      'bedd29_73a23352603a41a785f07846cfdcdca8~mv2.png',
      'bedd29_1e88a60015ba41188ca9d601f76bf9ba~mv2.jpg'
    ].map(gimg),
    thumb: wix('bedd29_20efc391cec64d5982d50215d1d27047', 'jpg', 900, 1100),
    features: [
      ['Bedrooms', '1'], ['Living', 'Shared'], ['Kitchen', '1'], ['Smart TV', 'Yes'],
      ['Pool', 'Shared'], ['Parking', 'Shared'], ['Wifi', 'Up to 150 mbps'], ['Floors', '2']
    ],
    neighborhood: [
      ['Beach', '1 min'], ['St. Ali Coffee', '3 min'], ['Camino De Padel', '3 min'],
      ['Shelter', '4 min'], ['Airport', '70 min']
    ]
  },

  /* ---------------------- PAST PROPERTIES ---------------------- */
  {
    slug: 'villanori', name: 'Villa Nori', sub: 'Sempol, Pererenan', region: 'Pererenan',
    location: 'Sempol, Pererenan', specs: '3 BR · 3.5 BA · Fully Furnished', beds: 3, baths: 3.5,
    tenure: ['Yearly', 'Monthly'], status: 'unavailable', statusLabel: 'Unavailable',
    href: 'https://www.islandboyhomes.com/villanori', cta: 'link',
    thumb: wix('bedd29_980c359d6c4c40238b6c00c634ce6f85', 'jpeg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Sempol, Pererenan — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_980c359d6c4c40238b6c00c634ce6f85', 'jpeg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '3.5'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'villa-adonis', name: 'Villa Adonis', sub: 'Padang Linjong, Canggu', region: 'Canggu',
    location: 'Padang Linjong, Canggu', specs: '3 BR · 3.5 BA · Fully Furnished', beds: 3, baths: 3.5,
    tenure: ['Yearly', 'Monthly'], status: 'unavailable', statusLabel: 'Unavailable',
    href: 'https://www.islandboyhomes.com/villa-adonis', cta: 'link',
    thumb: wix('bedd29_a4c88b6b0b2a4e3e922ffa5c8f03b7de', 'jpg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Padang Linjong, Canggu — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_a4c88b6b0b2a4e3e922ffa5c8f03b7de', 'jpg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '3.5'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'quarters-villa', name: 'Quarters Villa', sub: 'Batu Bolong, Canggu', region: 'Canggu',
    location: 'Batu Bolong, Canggu', specs: '3 BR · 3.5 BA · Fully Furnished', beds: 3, baths: 3.5,
    tenure: ['Yearly', 'Monthly'], status: 'nonactive', statusLabel: 'Non Active',
    href: 'https://www.islandboyhomes.com/quarters-villa', cta: 'link',
    thumb: wix('bedd29_01390e8c4eb649668072d06279727352', 'jpg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Batu Bolong, Canggu — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_01390e8c4eb649668072d06279727352', 'jpg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '3.5'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'casa-cardi', name: 'Casa Cardi', sub: 'Sempol, Pererenan', region: 'Pererenan',
    location: 'Sempol, Pererenan', specs: '3 BR · 2 BA · Fully Furnished', beds: 3, baths: 2,
    tenure: ['Yearly', 'Monthly'], status: 'unavailable', statusLabel: 'Unavailable',
    href: 'https://www.islandboyhomes.com/casa-cardi', cta: 'link',
    thumb: wix('bedd29_d41ef2ee48194d61b17889f3e98e47fb', 'jpg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Sempol, Pererenan — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_d41ef2ee48194d61b17889f3e98e47fb', 'jpg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '2'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'willow-villa', name: 'Willow Villa', sub: 'Umalas', region: 'Umalas',
    location: 'Umalas', specs: '2 BR · 2 BA · Fully Furnished', beds: 2, baths: 2,
    tenure: ['Yearly', 'Monthly'], status: 'nonactive', statusLabel: 'Non Active',
    href: 'https://www.islandboyhomes.com/willow-villa', cta: 'link',
    thumb: wix('bedd29_034c9d278c1141548d6e7acc41f278fc', 'jpg', 900, 1100),
    description: 'A fully furnished two-bedroom villa in Umalas — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_034c9d278c1141548d6e7acc41f278fc', 'jpg', 1200, 900)],
    features: [['Bedrooms', '2'], ['Bathrooms', '2'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'villa-emilia', name: 'Villa Emilia', sub: 'Tumbak Bayuh, Pererenan', region: 'Pererenan',
    location: 'Tumbak Bayuh, Pererenan', specs: '2 BR · 2.5 BA · Fully Furnished', beds: 2, baths: 2.5,
    tenure: ['Yearly', 'Monthly'], status: 'nonactive', statusLabel: 'Non Active',
    href: 'https://www.islandboyhomes.com/villa-emilia', cta: 'link',
    thumb: wix('bedd29_8f51a53a96f74c32b7e1095704f50f98', 'jpg', 900, 1100),
    description: 'A fully furnished two-bedroom villa in Tumbak Bayuh, Pererenan — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_8f51a53a96f74c32b7e1095704f50f98', 'jpg', 1200, 900)],
    features: [['Bedrooms', '2'], ['Bathrooms', '2.5'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'villa-migos', name: 'Villa Migos', sub: 'Padang Linjong, Canggu', region: 'Canggu',
    location: 'Padang Linjong, Canggu', specs: '3 BR · 3.5 BA · Fully Furnished', beds: 3, baths: 3.5,
    tenure: ['Yearly', 'Monthly'], status: 'unavailable', statusLabel: 'Unavailable',
    href: 'https://www.islandboyhomes.com/villa-migos', cta: 'link',
    thumb: wix('bedd29_7d1f11bce9bc463980406f8b5e653c43', 'jpg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Padang Linjong, Canggu — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_7d1f11bce9bc463980406f8b5e653c43', 'jpg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '3.5'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'villa-drake', name: 'Villa Drake', sub: 'Padang Linjong, Canggu', region: 'Canggu',
    location: 'Padang Linjong, Canggu', specs: '3 BR · 3.5 BA · Fully Furnished', beds: 3, baths: 3.5,
    tenure: ['Yearly', 'Monthly'], status: 'unavailable', statusLabel: 'Unavailable',
    href: 'https://www.islandboyhomes.com/villa-drake', cta: 'link',
    thumb: wix('bedd29_df7e8cd64e564dc08fa445e1f343d5ca', 'jpg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Padang Linjong, Canggu — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_df7e8cd64e564dc08fa445e1f343d5ca', 'jpg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '3.5'], ['Furnished', 'Fully']], neighborhood: []
  },
  {
    slug: 'tepikali-villa', name: 'Tepikali Villa', sub: 'Padonan, Canggu', region: 'Canggu',
    location: 'Padonan, Canggu', specs: '3 BR · 3 BA · Fully Furnished', beds: 3, baths: 3,
    tenure: ['Yearly', 'Monthly'], status: 'nonactive', statusLabel: 'Non Active',
    href: 'https://www.islandboyhomes.com/tepikali-villa', cta: 'link',
    thumb: wix('bedd29_9ed4b1fb5d6a4958848ed1e09f6b7f69', 'jpg', 900, 1100),
    description: 'A fully furnished three-bedroom villa in Padonan, Canggu — previously part of the Island Boy managed portfolio.',
    images: [wix('bedd29_9ed4b1fb5d6a4958848ed1e09f6b7f69', 'jpg', 1200, 900)],
    features: [['Bedrooms', '3'], ['Bathrooms', '3'], ['Furnished', 'Fully']], neighborhood: []
  }
];

const ACTIVE_STATUSES = ['available', 'leasehold'];
