const places = [
    {
      id: '1',
      name: 'Kebun Raya Bogor',
      location: 'Jl. Ir. H. Juanda No.13, Paledang, Kec. Bogor Tengah, Kota Bogor, Jawa Barat ',
      image: require('../assets/kebunrayabogor.jpeg'),
      title:'Kebun Raya Bogor',
      details: `Salah satu destinasi wisata yang tidak boleh dilewatkan saat ke Bogor adalah taman wisata Kebun Raya Bogor. 
      Pada mulanya, tempat wisata ini hanya digunakan sebagai kebun percobaan bagi berbagai jenis tanaman yang akan diperkenalkan di Hindia Belanda.
      Namun, seiring berjalannya waktu, tempat ini menjadi wadah bagi para ilmuwan, terutama yang berkecimpung dalam bidang botani.
      Dan untuk fasilitasnya ada Tour de Kebun Raya, Fasilitas Penyewaan, Taman Teijsmann, Taman Soedjana Kassan, dan masih banyak Spot Menarik Lainnya di Kebun Raya Bogor.`,
      harga:`Senin - Jumat : pukul 08.00 - 16.00 WIB
      Harga : Rp16.500
      Sabtu, Minggu, atau Hari Libur Nasional : pukul 07.00 - 16.00 WIB
      Harga : Rp26.500`,
    },
    {
      id: '2',
      name: 'Paralayang Bukit Gantole Puncak',
      location: 'Jl. Raya Puncak Km 87, Bukit Paralayang, Puncak.',
      image: require('../assets/alam2.jpg'),
      details: `Paragliding itu bahasa inggris, kalau bahasa Indonesianya disebut paralayang, yaitu salah satu jenis olah raga payung yang biasa dilakukan oleh tentara. Namun di bukit Gantole ini, siapa pun bisa melakukannya selama memenuhi syarat dan dipandu oleh tim ahli. 
      So, bagi kamu yang kepo mau nyobain olah raga yang super menguras adrenalin dan memuaskan mata karena indahnya pemandangan ini.`,
      harga:`buka pukul  : 08.00 sd 17.00 WIB
      Tiket masuk : Rp. 13.000
      HTM Pragliding untuk wisatawan lokal : Rp. 350.000
      HTM Pragliding untuk wisatawan Asing : Rp. 400.000`,
    },
    {
      id: '3',
      name: 'Taman bunga Nusantara',
      location: 'Jl. Mariwati Km 7 Desa Kawungluwuk, Sukaresmi, Cianjur.',
      image: require('../assets/tamanbunganusantara.jpg'),
      details: `Tempat wisata Bogor yang satu ini dibangun di atas lahan seluas 23 hektar. Dipenuhi bunga-bunga cantik yang ditata dengan apik. Pengunjung bisa menjajal taman labirin, go-kart, bumper boat atau ATV race. Air mancur musikalnya juga cantik, lho.
      Ada beberapa wahana yaitu taman bunga mawar , taman labirin dan banyak lagi lalu juga banyak fasilitas yang tersedia seperti Berbagai kendaraan sewa untuk berkeliling taman, Gazebo untuk istirahat saat lelah mengelilingi taman, Toko oleh-oleh, Toko bunga, Food court`,
      harga:`buka pukul : 08.00 sd 17.00 WIB
      Tiket masuk : Rp 40.000 / orang`,
    },
    { 
      id: '4',
      name: 'Highland Park Resort',
      location: 'Jl. Curug Nangka, Sinarwangi, Sukajadi, Kec. Tamansari, Kabupaten Bogor, Jawa Barat ',
      image: require('../assets/highlandparkresort.jpg'),
      details: `Tempat wisata di Bogor ini suguhkan glamping, konsep berkemah ala hotel berbintang yang saat ini sedang marak di Indonesia. Berlokasi di Curug Nangka, Kp. Sinarwangi, Taman Sari, Highland Park Resort menawarkan sensasi menginap dengan latar pemandangan Gunung Salak. Mereka juga menyediakan tenda-tenda ala Mongolia dengan fasilitas lengkap dan berbagai wahana permainan. Antara lain kolam renang, perosotan, karaoke, foot reflexology, futsal, dan flying fox.
      The Highland Park Resort Bogor memiliki fasilitas terbaik seperti: AC, Restoran, Kolam Renang, Resepsionis 24 Jam, Parkir, WiFi. (Beberapa fasilitas lain mungkin memerlukan biaya tambahan).
      Fasilitas penunjang Highland Resort Bogor bisa dikatakan lengkap, mulai dari WiFi, restoran, kolam renang, live-music, hingga minimarket untuk pengunjung yang menginap.`,
      harga:`check-in mulai pukul : 15:00 WIB
      check-out paling lambat pukul Sebelum : 12:00 WIB
      harga mulai dari Rp.1.400.000/malam dimana harga penyewaan ini bisa berubah sewaktu-waktu.`,
    },
    { 
      id: '5',
      name: 'Curug Cibaliung',
      location: 'Sentul, Kabupaten Bogor, Jawa Barat',
      image: require('../assets/curugcibaliung.jpg'),
      details: `Karang Tengah juga punya objek wisata alam berupa curug cantik. Inilah Curug Cibaliung yang berair biru jernih dan sejuk. Belum banyak wisatawan yang mengetahui keberadaan curug ini.
      Tinggi air terjun di Curug Cibaliung sebenarnya tidak terlalu tinggi, tetapi jernih dan cukup deras. Titik bermuaranya air memiliki warna kehijauan yang terlihat lebih jelas saat musim panas. Selain airnya yang jernih, bebatuan besar di sekitar curug dapat memanjakan mata, saking indahnya.`,
      harga:`buka pukul : 08.00 sd 17.00 WIB
      Tiket masuk : Rp15.000 per orang, Rp5.000 untuk parkir kendaraan, dan Rp5.000 untuk biaya retribusi.`,
    },{ 
      id: '6',
      name: 'Curug Ciherang & Jembatan Kayu Gantung',
      location: ' Desa Sirnajaya, Kecamatan Sukamakmur, Bogor, Jawa Barat',
      image: require('../assets/curugciherang.jpg'),
      details: `Gardu pandang di ketinggian bukit dengan pemandangan sekitar yang indah bisa ditemui di kawasan wisata Curug Ciherang. Di sini baru dibangun rumah pohon dan jembatan kayu gantung untuk menikmati keindahan alam sekitar. Jembatan kayunya sendiri sangat Instagramable curug nya juga tidak kalah cantik.
      Ada banyak wahana salah satunya kolam renang dan juga banyak spot foto yang indah dan bagus`,
      harga:`buka pukul : 087.00 sd 18.00 WIB
      Tiket masuk : Rp 40.000 / orang sudah termasuk wahana`,
    },{ 
      id: '7',
      name: 'Curug Cipamingkis',
      location: 'Desa Wargajaya, Kecamatan Sukamakmur, Kabupaten Bogor, Provinsi Jawa Barat.',
      image: require('../assets/curugcipamingkis.jpeg'),
      details: `Curug Cipamingkis, merupakan satu dari sekian banyak obyek wisata di Bogor yang wajib dikunjungi. Curug atau air terjun yang terletak di Desa Wargajaya, Kecamatan Sukamakmur, Kabupaten Bogor, Jawa Barat ini tak hanya menyajikan keindahan alam yang dikelilingi pohon besar. Curug Cipamingkis merupakan tempat pertemuan aliran dua sungai yang melintasi Kabupaten Bogor, yaitu Sungai Cipamingkis dan Sungai Cisarua. Nama Curug Cipamingkis sendiri diambil dari salah satu sumber sungai tersebut.
      Ada tempat penginpan dan memiliki spot foto dengan pemandangan yang indah.`,
      harga:`buka pukul : 07.00 sd 18.00 WIB
      Tiket masuk 
      Wisatawan Nusantara
      Weekday Rp 35.000 / Orang
      Weekend Rp 40.000 / Orang
      Wisatawan MancaNegara
      Harga Tiket Masuk Rp 50.000 / Orang
      High Season
      Camping Ground
      Weekday Rp 60.000 / Orang
      Weekend Rp 65.000 / Orang`,
    },{ 
      id: '8',
      name: 'Devoyage Bogor',
      location: 'Jl. Bogor Nirwana Residence Jl. Indigo Raya, Mulyaharja, Kec. Bogor Sel., Kota Bogor, Jawa Barat',
      image: require('../assets/devoyagebogor.jpeg'),
      details: `memiliki konsep taman berisi bangunan atau landmark terkenal dari berbagai negara Eropa. Maka, tak heran jika pemburu spot Instagramable berkunjung ke destinasi ini. Lokasinya ada di daerah Nirwana Residence, Jalan Indigo Raya, Mulyaharja, Bogor Selatan, Jawa Barat.  Jarak Devoyage dari Stasiun Bogor di Cibogor adalah sekitar 7 kilometer (km) dan dapat ditempuh dalam waktu sekitar 22 menit, tentunya bergantung pada kondisi lalu lintas saat itu.
      ada beragam spot foto di Devoyage Bogor, tepatnya ada sekitar 150 tempat yang bisa digunakan oleh pengunjung untuk mengabadikan momen.`,
      harga:`buka pukul : 09.00 WIB-18.00 WIB
      Tiket masuk 
      hari biasa mulai dari Rp 30.000
      akhir pekan mulai dari Rp 40.000.`,
    }, 
  ];
  export default places;