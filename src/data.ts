// interface Song {
//   song_name: string;
//   song_url: string;
//   song_image: string;
//   song_artist: string;
// }
// interface Album {
//   artist: string;
//   image: string;
//   songs: Song[];
// }
class Song {
  constructor(
    public song_name: string,
    public song_url: string,
    public song_image: string,
    public song_artist: string
  ) {}
  get_song_name(): string {
    return this.song_name;
  }
  get_song_url(): string {
    return this.song_url;
  }
  get_song_image(): string {
    return this.song_image;
  }
  get_song_artist(): string {
    return this.song_artist;
  }
}
class Album {
  constructor(
    public artists: string,
    public image: string,
    public songs: Song[]
  ) {}
  get_artists(): string {
    return this.artists;
  }
  get_image(): string {
    return this.image;
  }
  get_songs(): Song[] {
    return this.songs;
  }
}
let last_christmas: Song = new Song(
  "Last Christmas",
  "https://ia600101.us.archive.org/3/items/Wham--LastChristmas/Wham%21%20%E2%80%94%20%27Last%20Christmas%27.mp3",
  "images/last-christmas.jpeg",
  "Wham!"
);
let wake_me_up: Song = new Song(
  "Wake Me Up",
  "https://ia801704.us.archive.org/23/items/wake-me-up-before-you-go-go/Wake%20Me%20up%20Before%20You%20Go-Go.mp3",
  "images/wake-me-up.jpeg",
  "Wham!"
);
let careless_whisper: Song = new Song(
  "Careless Whisper",
  "https://ia802901.us.archive.org/28/items/agados._20200309_1351/George%20Michael-Careless%20Whisper.mp3",
  "images/careless-whisper.jpeg",
  "Wham!"
);
let everything_shes_wants: Song = new Song(
  "Everything She Wants",
  "https://ia801401.us.archive.org/26/items/wham84/02%20Everything%20She%20Wants.mp3",
  "images/everything-she-wants.jpeg",
  "Wham!"
);
let like_a_baby: Song = new Song(
  "Like a Baby",
  "https://ia601401.us.archive.org/26/items/wham84/04%20Like%20A%20Baby.mp3",
  "images/like-a-baby.jpeg",
  "Wham!"
);
let freedom: Song = new Song(
  "Freedom",
  "https://ia801401.us.archive.org/26/items/wham84/05%20Freedom.mp3",
  "images/freedom.jpeg",
  "Wham!"
);
let if_you_were_there: Song = new Song(
  "If You Were There",
  "https://ia801401.us.archive.org/26/items/wham84/06%20If%20You%20Were%20There.mp3",
  "images/if-you-were-there.jpeg",
  "Wham!"
);
let wham_album: Album = new Album("Wham!", "images/wham-album.jpeg", [
  last_christmas,
  wake_me_up,
  careless_whisper,
  everything_shes_wants,
  like_a_baby,
  freedom,
  if_you_were_there,
]);
let blank_space: Song = new Song(
  "Blank Space",
  "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/003%20Tailor%20Swift%20-%20Blank%20Space.mp3",
  "images/blank-space.jpeg",
  "Taylor Swift"
);
let shake_it_off: Song = new Song(
  "Shake It Off",
  "https://ia601004.us.archive.org/3/items/003tailorswiftblankspace_201910/011%20Tailor%20Swift%20-%20Shake%20It%20Off.mp3",
  "images/shake-it-off.jpeg",
  "Taylor Swift"
);
let t22: Song = new Song(
  "22",
  "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/004%20Taylor%20Swift%20-%2022.mp3",
  "images/22.jpeg",
  "Taylor Swift"
);
let love_story: Song = new Song(
  "Love Story",
  "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/006%20Taylor%20Swift%20-%20Love%20Story.mp3",
  "images/love-story.jpeg",
  "Taylor Swift"
);
let back_to_december: Song = new Song(
  "Back to December",
  "https://ia801004.us.archive.org/3/items/003tailorswiftblankspace_201910/008%20Taylor%20Swift%20-%20Back%20To%20December.mp3",
  "images/back-to-dec.jpeg",
  "Taylor Swift"
);
let story_of_us: Song = new Song(
  "The Story of Us",
  "https://ia601004.us.archive.org/3/items/003tailorswiftblankspace_201910/010%20Taylor%20Swift%20-%20The%20Story%20Of%20Us.mp3",
  "images/the-story-of-us.jpeg",
  "Taylor Swift"
);
let bad_blood: Song = new Song(
  "Bad Blood",
  "https://ia601004.us.archive.org/3/items/003tailorswiftblankspace_201910/014%20Tailor%20Swift%20-%20Bad%20Blood.mp3",
  "images/bad-blood.jpeg",
  "Taylor Swift"
);
let taylor_swift_album: Album = new Album(
  "Taylor Swift",
  "images/taylor-swift-album.jpeg",
  [
    blank_space,
    shake_it_off,
    t22,
    love_story,
    back_to_december,
    story_of_us,
    bad_blood,
  ]
);
let ein_alek: Song = new Song(
  "Einy Alek",
  "https://ia800202.us.archive.org/23/items/NancyAjramAlbum7/01.3eyni.3aleyk.mp3",
  "images/ein-alek.jpeg",
  "Nancy Ajram"
);
let sheikh_el_shabab: Song = new Song(
  "Sheikh El Shabab",
  "https://ia800202.us.archive.org/23/items/NancyAjramAlbum7/14.Sheikh.El.Shabab.mp3",
  "images/sheikh-el-shabab.jpeg",
  "Nancy Ajram"
);
let ya_kether: Song = new Song(
  "Ya Kether",
  "https://ia600202.us.archive.org/23/items/NancyAjramAlbum7/05.Ya.Kothor.mp3",
  "images/ya-kether.jpeg",
  "Nancy Ajram"
);
let el_donya_helwa: Song = new Song(
  "El Donya Helwa",
  "https://ia601808.us.archive.org/10/items/9.-nancy-ajram-el-dounya-helwa/9.%20Nancy%20Ajram%20-%20El%20Dounya%20Helwa.mp3",
  "images/el-donya-helwa.jpeg",
  "Nancy Ajram"
);
let ah_w_noss: Song = new Song(
  "Ah W Noss",
  "https://ia800104.us.archive.org/21/items/wowonindo_gmail_4ncy/Nancy%20Ajram%20-%20Aah%20W%20Noss.mp3",
  "images/ah-w-noss.jpeg",
  "Nancy Ajram"
);
let ma_tigi_hena: Song = new Song(
  "Ma Tigi Hena",
  "https://ia800104.us.archive.org/21/items/wowonindo_gmail_4ncy/Nancy%20Ajram%20-%20Ma%20Tegi%20Hena%20Official%20Video%20Lyrics.mp3",
  "images/ma-tigi-hena.jpeg",
  "Nancy Ajram"
);
let akshmak_ah: Song = new Song(
  "Akshmak Ah",
  "https://ia600104.us.archive.org/21/items/wowonindo_gmail_4ncy/Nancy%20Ajram%20-%20Akhasmak%20Ah.mp3",
  "images/akshmak-ah.jpeg",
  "Nancy Ajram"
);
let nancy_ajram_album: Album = new Album(
  "Nancy Ajram",
  "images/nancy-ajram-album.jpeg",
  [
    ein_alek,
    sheikh_el_shabab,
    ya_kether,
    el_donya_helwa,
    ah_w_noss,
    ma_tigi_hena,
    akshmak_ah,
  ]
);
let kezabeen: Song = new Song(
  "Kezabeen",
  "https://ia800805.us.archive.org/13/items/Album.Wael.Kfoury_W.2017/Wael.Kfoury_Kezzabeen.mp3",
  "images/kezabeen.jpeg",
  "Wael Kfoury"
);
let ana_albi_meshta2: Song = new Song(
  "Ana Albi Meshta2",
  "https://ia601303.us.archive.org/30/items/ouj_Wael/5Ana%202albi%20meshta2.mp3",
  "images/ana-albi-meshta2.jpeg",
  "Wael Kfoury"
);
let law_hobna_ghalta: Song = new Song(
  "Law Hobna Ghalta",
  "https://ia801303.us.archive.org/30/items/ouj_Wael/2law%207obna%20ghalta.mp3",
  "images/law-hobna-ghalta.jpeg",
  "Wael Kfoury"
);
let mn_alby_habytak: Song = new Song(
  "Mn Alby Habytak",
  "https://ia801303.us.archive.org/30/items/ouj_Wael/52Min%20Albi%20Habytak.mp3",
  "images/mn-alby-habytak.jpeg",
  "Wael Kfoury"
);
let ntafa_el_meshwar: Song = new Song(
  "Ntafa El Meshwar",
  "https://ia801303.us.archive.org/30/items/ouj_Wael/65W%20Ntafa%20Lmishwar%20.mp3",
  "images/ntafa-el-meshwar.jpeg",
  "Wael Kfoury"
);
let maghroura: Song = new Song(
  "Maghroura",
  "https://ia801303.us.archive.org/30/items/ouj_Wael/47Maghroura.mp3",
  "images/maghroura.jpeg",
  "Wael Kfoury"
);
let khedny_layk: Song = new Song(
  "Khedny Layk",
  "https://ia801303.us.archive.org/30/items/ouj_Wael/38Khedney%20Layk.mp3",
  "images/khedny-layk.jpeg",
  "Wael Kfoury"
);
let wael_kfoury_album: Album = new Album(
  "Wael Kfoury",
  "images/wael-kfoury-album.jpeg",
  [
    kezabeen,
    ana_albi_meshta2,
    law_hobna_ghalta,
    mn_alby_habytak,
    ntafa_el_meshwar,
    maghroura,
    khedny_layk,
  ]
);
let attention: Song = new Song(
  "Attention",
  "https://ia600701.us.archive.org/10/items/CharliePuthAttentionOfficialVideo_201812/Charlie%20Puth%20-%20Attention%20Official%20Video.mp3",
  "images/attention.jpeg",
  "Charli Puth"
);
let we_dont_talk_anymore: Song = new Song(
  "We Don't Talk Anymore",
  "https://ia802801.us.archive.org/14/items/charlieputhl.u.vlyrics/We%20Don%27t%20Talk%20Anymore%20-%20Charlie%20Puth%20%28Ft.%20Selena%20Gomez%29%20%28Lyrics%29.mp3",
  "images/we-dont-talk-anymore.jpeg",
  "Charli Puth"
);
let cheating_on_you: Song = new Song(
  "Cheating on You",
  "https://ia902801.us.archive.org/14/items/charlieputhl.u.vlyrics/Charlie%20Puth%20-%20Cheating%20on%20You%20%28Lyrics%29.mp3",
  "images/cheating-on-you.jpeg",
  "Charli Puth"
);
let diamond: Song = new Song(
  "Diamond",
  "https://ia802801.us.archive.org/14/items/charlieputhl.u.vlyrics/Charlie%20Puth%20-%20Diamonds%20%28Lyrics%29.mp3",
  "images/diamond.jpeg",
  "Charli Puth"
);
let empty_cups: Song = new Song(
  "Empty Cups",
  "https://ia802801.us.archive.org/14/items/charlieputhl.u.vlyrics/Charlie%20Puth%20-%20Empty%20Cups.mp3",
  "images/empty-cups.jpeg",
  "Charli Puth"
);
let see_you_again: Song = new Song(
  "See You Again",
  "https://ia601902.us.archive.org/30/items/wiz-20-khalifa-20-20-see-20-you-20-again-20ft.-20-charlie-20-puth-20-lyrics/Wiz%2520Khalifa%2520~%2520See%2520You%2520Again%2520ft.%2520Charlie%2520Puth%2520Lyrics.mp3",
  "images/see-you-again.jpeg",
  "Charli Puth"
);
let titanuim: Song = new Song(
  "Titanium",
  "https://ia802801.us.archive.org/14/items/charlieputhl.u.vlyrics/Charlie%20Puth%20-%20Titanium%20%28Lyrics%29.mp3",
  "images/titanium.jpeg",
  "Charli Puth"
);
let charli_puth_album: Album = new Album(
  "Charli Puth",
  "images/charli-puth-album.jpeg",
  [
    attention,
    we_dont_talk_anymore,
    cheating_on_you,
    diamond,
    empty_cups,
    see_you_again,
    titanuim,
  ]
);
let bent_el_shalabiya: Song = new Song(
  "Bent El Shalabiya",
  "https://ia902205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_..bent-alshalabeya.mp3",
  "images/bnt-el-shalbiya.jpeg",
  "Fayrouz"
);
let shayef_el_bahr: Song = new Song(
  "Shayef El Bahr",
  "https://ia802205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_.shayef-al-ba7ar.mp3",
  "images/shayef-el-bahr.jpeg",
  "Fayrouz"
);
let shati_ya_denya: Song = new Song(
  "Shati Ya Denya",
  "https://ia902205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_..shati-ya-deni.mp3",
  "images/shati-ya-denya.jpeg",
  "Fayrouz"
);
let ya_ana: Song = new Song(
  "Ya Ana",
  "https://ia802205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_..ya-ana.mp3",
  "images/ya-ana.jpeg",
  "Fayrouz"
);
let habytak_bel_saif: Song = new Song(
  "Habaitak Bel Saif",
  "https://ia802205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_..7abaitak-belsaif.mp3",
  "images/habaitak-bel-saif.jpeg",
  "Fayrouz"
);
let akher_ayam_el_sayf: Song = new Song(
  "Akher Ayam El Sayf",
  "https://ia902205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_..a5er-eyam-el-sayfeyee.mp3",
  "images/akher-ayam-el-sayf.jpeg",
  "Fayrouz"
);
let bhebak_ya_lebnan: Song = new Song(
  "Bhebak Ya Lebnan",
  "https://ia802205.us.archive.org/6/items/Fairouz_934/WwW.Gadra.MA_..ba7ebak-ya-lebnan.mp3",
  "images/bhebak-ya-lebnan.jpeg",
  "Fayrouz"
);
let fayrouz_album: Album = new Album("Fayrouz", "images/fayrouz-album.jpeg", [
  bent_el_shalabiya,
  shayef_el_bahr,
  shati_ya_denya,
  ya_ana,
  habytak_bel_saif,
  akher_ayam_el_sayf,
  bhebak_ya_lebnan,
]);
let albums: Album[] = [
  wham_album,
  taylor_swift_album,
  nancy_ajram_album,
  wael_kfoury_album,
  charli_puth_album,
  fayrouz_album,
];

albums.forEach((album) => {
  console.log(album.get_artists());
  console.log(album.get_image());
  album.get_songs().forEach((song) => {
    console.log(song.get_song_name());
    console.log(song.get_song_url());
    console.log(song.get_song_image());
    console.log(song.get_song_artist());
  });
});
