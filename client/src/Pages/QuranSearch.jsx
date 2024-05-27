import React, { useState, useEffect } from 'react';

function QuranSearch() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Assuming your ayatData is an array of objects with Surah information
  const ayatData = [
    {
      "index": 1,
      "question": "الفاتحة",
      "name": "سُورَةُ ٱلْفَاتِحَةِ",
      "englishName": "Al-Faatiha",
      "englishNameTranslation": "The Opening",
      "numberOfAyahs": 7,
      "revelationType": "مكيه"
    },
    {
      "index": 2,
      "question": "البقرة",
      "name": "سُورَةُ البَقَرَةِ",
      "englishName": "Al-Baqara",
      "englishNameTranslation": "The Cow",
      "numberOfAyahs": 286,
      "revelationType": "مدنيه"
    },
    {
      "index": 3,
      "question": "آل عمران",
      "name": "سُورَةُ آلِ عِمۡرَانَ",
      "englishName": "Aal-i-Imraan",
      "englishNameTranslation": "The Family of Imraan",
      "numberOfAyahs": 200,
      "revelationType": "مدنيه"
    },
    {
      "index": 4,
      "question": "النساء",
      "name": "سُورَةُ النِّسَاءِ",
      "englishName": "An-Nisaa",
      "englishNameTranslation": "The Women",
      "numberOfAyahs": 176,
      "revelationType": "مدنيه"
    },
    {
      "index": 5,
      "question": "المائدة",
      "name": "سُورَةُ المَائـِدَةِ",
      "englishName": "Al-Maaida",
      "englishNameTranslation": "The Table",
      "numberOfAyahs": 120,
      "revelationType": "مدنيه"
    },
    {
      "index": 6,
      "question": "الأنعام",
      "name": "سُورَةُ الأَنۡعَامِ",
      "englishName": "Al-An'aam",
      "englishNameTranslation": "The Cattle",
      "numberOfAyahs": 165,
      "revelationType": "مكيه"
    },
    {
      "index": 7,
      "question": "الأعرَاف",
      "name": "سُورَةُ الأَعۡرَافِ",
      "englishName": "Al-A'raaf",
      "englishNameTranslation": "The Heights",
      "numberOfAyahs": 206,
      "revelationType": "مكيه"
    },
    {
      "index": 8,
      "question": "الأنفَال",
      "name": "سُورَةُ الأَنفَالِ",
      "englishName": "Al-Anfaal",
      "englishNameTranslation": "The Spoils of War",
      "numberOfAyahs": 75,
      "revelationType": "مدنيه"
    },
    {
      "index": 9,
      "question": "التوبَة",
      "name": "سُورَةُ التَّوۡبَةِ",
      "englishName": "At-Tawba",
      "englishNameTranslation": "The Repentance",
      "numberOfAyahs": 129,
      "revelationType": "مدنيه"
    },
    {
      "index": 10,
      "question": "يُونس",
      "name": "سُورَةُ يُونُسَ",
      "englishName": "Yunus",
      "englishNameTranslation": "Jonas",
      "numberOfAyahs": 109,
      "revelationType": "مكيه"
    },
    {
      "index": 11,
      "question": "هُود",
      "name": "سُورَةُ هُودٍ",
      "englishName": "Hud",
      "englishNameTranslation": "Hud",
      "numberOfAyahs": 123,
      "revelationType": "مكيه"
    },
    {
      "index": 12,
      "question": "يُوسُف",
      "name": "سُورَةُ يُوسُفَ",
      "englishName": "Yusuf",
      "englishNameTranslation": "Joseph",
      "numberOfAyahs": 111,
      "revelationType": "مكيه"
    },
    {
      "index": 13,
      "question": "الرَّعْد",
      "name": "سُورَةُ الرَّعۡدِ",
      "englishName": "Ar-Ra'd",
      "englishNameTranslation": "The Thunder",
      "numberOfAyahs": 43,
      "revelationType": "مدنيه"
    },
    {
      "index": 14,
      "question": "إبراهِيم",
      "name": "سُورَةُ إِبۡرَاهِيمَ",
      "englishName": "Ibrahim",
      "englishNameTranslation": "Abraham",
      "numberOfAyahs": 52,
      "revelationType": "مكيه"
    },
    {
      "index": 15,
      "question": "الحِجْر",
      "name": "سُورَةُ الحِجۡرِ",
      "englishName": "Al-Hijr",
      "englishNameTranslation": "The Rock",
      "numberOfAyahs": 99,
      "revelationType": "مكيه"
    },
    {
      "index": 16,
      "question": "النَّحْل",
      "name": "سُورَةُ النَّحۡلِ",
      "englishName": "An-Nahl",
      "englishNameTranslation": "The Bee",
      "numberOfAyahs": 128,
      "revelationType": "مكيه"
    },
    {
      "index": 17,
      "question": "الإسْرَاء",
      "name": "سُورَةُ الإِسۡرَاءِ",
      "englishName": "Al-Israa",
      "englishNameTranslation": "The Night Journey",
      "numberOfAyahs": 111,
      "revelationType": "مكيه"
    },
    {
      "index": 18,
      "question": "الكهْف",
      "name": "سُورَةُ الكَهۡفِ",
      "englishName": "Al-Kahf",
      "englishNameTranslation": "The Cave",
      "numberOfAyahs": 110,
      "revelationType": "مكيه"
    },
    {
      "index": 19,
      "question": "مَريَم",
      "name": "سُورَةُ مَرۡيَمَ",
      "englishName": "Maryam",
      "englishNameTranslation": "Mary",
      "numberOfAyahs": 98,
      "revelationType": "مكيه"
    },
    {
      "index": 20,
      "question": "طه",
      "name": "سُورَةُ طه",
      "englishName": "Taa-Haa",
      "englishNameTranslation": "Taa-Haa",
      "numberOfAyahs": 135,
      "revelationType": "مكيه"
    },
    {
      "index": 21,
      "question": "الأنبيَاء",
      "name": "سُورَةُ الأَنبِيَاءِ",
      "englishName": "Al-Anbiyaa",
      "englishNameTranslation": "The Prophets",
      "numberOfAyahs": 112,
      "revelationType": "مكيه"
    },
    {
      "index": 22,
      "question": "الحَج",
      "name": "سُورَةُ الحَجِّ",
      "englishName": "Al-Hajj",
      "englishNameTranslation": "The Pilgrimage",
      "numberOfAyahs": 78,
      "revelationType": "مدنيه"
    },
    {
      "index": 23,
      "question": "المُؤمنون",
      "name": "سُورَةُ المُؤۡمِنُونَ",
      "englishName": "Al-Muminoon",
      "englishNameTranslation": "The Believers",
      "numberOfAyahs": 118,
      "revelationType": "مكيه"
    },
    {
      "index": 24,
      "question": "النُّور",
      "name": "سُورَةُ النُّورِ",
      "englishName": "An-Noor",
      "englishNameTranslation": "The Light",
      "numberOfAyahs": 64,
      "revelationType": "مدنيه"
    },
    {
      "index": 25,
      "question": "الفُرْقان",
      "name": "سُورَةُ الفُرۡقَانِ",
      "englishName": "Al-Furqaan",
      "englishNameTranslation": "The Criterion",
      "numberOfAyahs": 77,
      "revelationType": "مكيه"
    },
    {
      "index": 26,
      "question": "الشُّعَرَاء",
      "name": "سُورَةُ الشُّعَرَاءِ",
      "englishName": "Ash-Shu'araa",
      "englishNameTranslation": "The Poets",
      "numberOfAyahs": 227,
      "revelationType": "مكيه"
    },
    {
      "index": 27,
      "question": "النَّمْل",
      "name": "سُورَةُ النَّمۡلِ",
      "englishName": "An-Naml",
      "englishNameTranslation": "The Ant",
      "numberOfAyahs": 93,
      "revelationType": "مكيه"
    },
    {
      "index": 28,
      "question": "القَصَص",
      "name": "سُورَةُ القَصَصِ",
      "englishName": "Al-Qasas",
      "englishNameTranslation": "The Stories",
      "numberOfAyahs": 88,
      "revelationType": "مكيه"
    },
    {
      "index": 29,
      "question": "العَنكبوت",
      "name": "سُورَةُ العَنكَبُوتِ",
      "englishName": "Al-Ankaboot",
      "englishNameTranslation": "The Spider",
      "numberOfAyahs": 69,
      "revelationType": "مكيه"
    },
    {
      "index": 30,
      "question": "الرُّوم",
      "name": "سُورَةُ الرُّومِ",
      "englishName": "Ar-Room",
      "englishNameTranslation": "The Romans",
      "numberOfAyahs": 60,
      "revelationType": "مكيه"
    },
    {
      "index": 31,
      "question": "لقمَان",
      "name": "سُورَةُ لُقۡمَانَ",
      "englishName": "Luqman",
      "englishNameTranslation": "Luqman",
      "numberOfAyahs": 34,
      "revelationType": "مكيه"
    },
    {
      "index": 32,
      "question": "السَّجدَة",
      "name": "سُورَةُ السَّجۡدَةِ",
      "englishName": "As-Sajda",
      "englishNameTranslation": "The Prostration",
      "numberOfAyahs": 30,
      "revelationType": "مكيه"
    },
    {
      "index": 33,
      "question": "الأحزَاب",
      "name": "سُورَةُ الأَحۡزَابِ",
      "englishName": "Al-Ahzaab",
      "englishNameTranslation": "The Clans",
      "numberOfAyahs": 73,
      "revelationType": "مدنيه"
    },
    {
      "index": 34,
      "question": "سَبَأ",
      "name": "سُورَةُ سَبَإٍ",
      "englishName": "Saba",
      "englishNameTranslation": "Sheba",
      "numberOfAyahs": 54,
      "revelationType": "مكيه"
    },
    {
      "index": 35,
      "question": "فَاطِر",
      "name": "سُورَةُ فَاطِرٍ",
      "englishName": "Faatir",
      "englishNameTranslation": "The Originator",
      "numberOfAyahs": 45,
      "revelationType": "مكيه"
    },
    {
      "index": 36,
      "question": "يس",
      "name": "سُورَةُ يسٓ",
      "englishName": "Yaseen",
      "englishNameTranslation": "Yaseen",
      "numberOfAyahs": 83,
      "revelationType": "مكيه"
    },
    {
      "index": 37,
      "question": "الصَّافات",
      "name": "سُورَةُ الصَّافَّاتِ",
      "englishName": "As-Saaffaat",
      "englishNameTranslation": "Those drawn up in Ranks",
      "numberOfAyahs": 182,
      "revelationType": "مكيه"
    },
    {
      "index": 38,
      "question": "ص",
      "name": "سُورَةُ صٓ",
      "englishName": "Saad",
      "englishNameTranslation": "The letter Saad",
      "numberOfAyahs": 88,
      "revelationType": "مكيه"
    },
    {
      "index": 39,
      "question": "الزُّمَر",
      "name": "سُورَةُ الزُّمَرِ",
      "englishName": "Az-Zumar",
      "englishNameTranslation": "The Groups",
      "numberOfAyahs": 75,
      "revelationType": "مكيه"
    },
    {
      "index": 40,
      "question": "غَافِر",
      "name": "سُورَةُ غَافِرٍ",
      "englishName": "Ghafir",
      "englishNameTranslation": "The Forgiver",
      "numberOfAyahs": 85,
      "revelationType": "مكيه"
    },
    {
      "index": 41,
      "question": "فُصِّلَتْ",
      "name": "سُورَةُ فُصِّلَتۡ",
      "englishName": "Fussilat",
      "englishNameTranslation": "Explained in detail",
      "numberOfAyahs": 54,
      "revelationType": "مكيه"
    },
    {
      "index": 42,
      "question": "الشُّورَى",
      "name": "سُورَةُ الشُّورَىٰ",
      "englishName": "Ash-Shura",
      "englishNameTranslation": "Consultation",
      "numberOfAyahs": 53,
      "revelationType": "مكيه"
    },
    {
      "index": 43,
      "question": "الزُّخْرُف",
      "name": "سُورَةُ الزُّخۡرُفِ",
      "englishName": "Az-Zukhruf",
      "englishNameTranslation": "Ornaments of gold",
      "numberOfAyahs": 89,
      "revelationType": "مكيه"
    },
    {
      "index": 44,
      "question": "الدخَان",
      "name": "سُورَةُ الدُّخَانِ",
      "englishName": "Ad-Dukhaan",
      "englishNameTranslation": "The Smoke",
      "numberOfAyahs": 59,
      "revelationType": "مكيه"
    },
    {
      "index": 45,
      "question": "الجَاثيَة",
      "name": "سُورَةُ الجَاثِيَةِ",
      "englishName": "Al-Jaathiya",
      "englishNameTranslation": "Crouching",
      "numberOfAyahs": 37,
      "revelationType": "مكيه"
    },
    {
      "index": 46,
      "question": "الأحْقاف",
      "name": "سُورَةُ الأَحۡقَافِ",
      "englishName": "Al-Ahqaf",
      "englishNameTranslation": "The Dunes",
      "numberOfAyahs": 35,
      "revelationType": "مكيه"
    },
    {
      "index": 47,
      "question": "محَمَّد",
      "name": "سُورَةُ مُحَمَّدٍ",
      "englishName": "Muhammad",
      "englishNameTranslation": "Muhammad",
      "numberOfAyahs": 38,
      "revelationType": "مدنيه"
    },
    {
      "index": 48,
      "question": "الفَتْح",
      "name": "سُورَةُ الفَتۡحِ",
      "englishName": "Al-Fath",
      "englishNameTranslation": "The Victory",
      "numberOfAyahs": 29,
      "revelationType": "مدنيه"
    },
    {
      "index": 49,
      "question": "الحُجرَات",
      "name": "سُورَةُ الحُجُرَاتِ",
      "englishName": "Al-Hujuraat",
      "englishNameTranslation": "The Inner Apartments",
      "numberOfAyahs": 18,
      "revelationType": "مدنيه"
    },
    {
      "index": 50,
      "question": "ق",
      "name": "سُورَةُ قٓ",
      "englishName": "Qaaf",
      "englishNameTranslation": "The letter Qaaf",
      "numberOfAyahs": 45,
      "revelationType": "مكيه"
    },
    {
      "index": 51,
      "question": "الذَّاريَات",
      "name": "سُورَةُ الذَّارِيَاتِ",
      "englishName": "Adh-Dhaariyat",
      "englishNameTranslation": "The Winnowing Winds",
      "numberOfAyahs": 60,
      "revelationType": "مكيه"
    },
    {
      "index": 52,
      "question": "الطُّور",
      "name": "سُورَةُ الطُّورِ",
      "englishName": "At-Tur",
      "englishNameTranslation": "The Mount",
      "numberOfAyahs": 49,
      "revelationType": "مكيه"
    },
    {
      "index": 53,
      "question": "النَّجْم",
      "name": "سُورَةُ النَّجۡمِ",
      "englishName": "An-Najm",
      "englishNameTranslation": "The Star",
      "numberOfAyahs": 62,
      "revelationType": "مكيه"
    },
    {
      "index": 54,
      "question": "القَمَر",
      "name": "سُورَةُ القَمَرِ",
      "englishName": "Al-Qamar",
      "englishNameTranslation": "The Moon",
      "numberOfAyahs": 55,
      "revelationType": "مكيه"
    },
    {
      "index": 55,
      "question": "الرَّحمن",
      "name": "سُورَةُ الرَّحۡمَٰن",
      "englishName": "Ar-Rahmaan",
      "englishNameTranslation": "The Beneficent",
      "numberOfAyahs": 78,
      "revelationType": "مدنيه"
    },
    {
      "index": 56,
      "question": "الوَاقِعَة",
      "name": "سُورَةُ الوَاقِعَةِ",
      "englishName": "Al-Waaqia",
      "englishNameTranslation": "The Inevitable",
      "numberOfAyahs": 96,
      "revelationType": "مكيه"
    },
    {
      "index": 57,
      "question": "الحَديد",
      "name": "سُورَةُ الحَدِيدِ",
      "englishName": "Al-Hadid",
      "englishNameTranslation": "The Iron",
      "numberOfAyahs": 29,
      "revelationType": "مدنيه"
    },
    {
      "index": 58,
      "question": "المجَادلة",
      "name": "سُورَةُ المُجَادلَةِ",
      "englishName": "Al-Mujaadila",
      "englishNameTranslation": "The Pleading Woman",
      "numberOfAyahs": 22,
      "revelationType": "مدنيه"
    },
    {
      "index": 59,
      "question": "الحَشر",
      "name": "سُورَةُ الحَشۡرِ",
      "englishName": "Al-Hashr",
      "englishNameTranslation": "The Exile",
      "numberOfAyahs": 24,
      "revelationType": "مدنيه"
    },
    {
      "index": 60,
      "question": "الممتحنة",
      "name": "سُورَةُ المُمۡتَحنَةِ",
      "englishName": "Al-Mumtahana",
      "englishNameTranslation": "She that is to be examined",
      "numberOfAyahs": 13,
      "revelationType": "مدنيه"
    },
    {
      "index": 61,
      "question": "الصف",
      "name": "سُورَةُ الصَّفِّ",
      "englishName": "As-Saff",
      "englishNameTranslation": "The Ranks",
      "numberOfAyahs": 14,
      "revelationType": "مدنيه"
    },
    {
      "index": 62,
      "question": "الجمعة",
      "name": "سُورَةُ الجُمُعَةِ",
      "englishName": "Al-Jumu'a",
      "englishNameTranslation": "Friday",
      "numberOfAyahs": 11,
      "revelationType": "مدنيه"
    },
    {
      "index": 63,
      "question": "المنافقون",
      "name": "سُورَةُ المُنَافِقُونَ",
      "englishName": "Al-Munaafiqoon",
      "englishNameTranslation": "The Hypocrites",
      "numberOfAyahs": 11,
      "revelationType": "مدنيه"
    },
    {
      "index": 64,
      "question": "التغابن",
      "name": "سُورَةُ التَّغَابُنِ",
      "englishName": "At-Taghaabun",
      "englishNameTranslation": "Mutual Disillusion",
      "numberOfAyahs": 18,
      "revelationType": "مدنيه"
    },
    {
      "index": 65,
      "question": "الطلاق",
      "name": "سُورَةُ الطَّلَاقِ",
      "englishName": "At-Talaaq",
      "englishNameTranslation": "Divorce",
      "numberOfAyahs": 12,
      "revelationType": "مدنيه"
    },
    {
      "index": 66,
      "question": "التحريم",
      "name": "سُورَةُ التَّحۡرِيمِ",
      "englishName": "At-Tahrim",
      "englishNameTranslation": "The Prohibition",
      "numberOfAyahs": 12,
      "revelationType": "مدنيه"
    },
    {
      "index": 67,
      "question": "الملك",
      "name": "سُورَةُ المُلۡكِ",
      "englishName": "Al-Mulk",
      "englishNameTranslation": "The Sovereignty",
      "numberOfAyahs": 30,
      "revelationType": "مكيه"
    },
    {
      "index": 68,
      "question": "القلم",
      "name": "سُورَةُ القَلَمِ",
      "englishName": "Al-Qalam",
      "englishNameTranslation": "The Pen",
      "numberOfAyahs": 52,
      "revelationType": "مكيه"
    },
    {
      "index": 69,
      "question": "الحاقة",
      "name": "سُورَةُ الحَاقَّةِ",
      "englishName": "Al-Haaqqa",
      "englishNameTranslation": "The Reality",
      "numberOfAyahs": 52,
      "revelationType": "مكيه"
    },
    {
      "index": 70,
      "question": "المعارج",
      "name": "سُورَةُ المَعَارِجِ",
      "englishName": "Al-Ma'aarij",
      "englishNameTranslation": "The Ascending Stairways",
      "numberOfAyahs": 44,
      "revelationType": "مكيه"
    },
    {
      "index": 71,
      "question": "نوح",
      "name": "سُورَةُ نُوحٍ",
      "englishName": "Nooh",
      "englishNameTranslation": "Noah",
      "numberOfAyahs": 28,
      "revelationType": "مكيه"
    },
    {
      "index": 72,
      "question": "الجن",
      "name": "سُورَةُ الجِنِّ",
      "englishName": "Al-Jinn",
      "englishNameTranslation": "The Jinn",
      "numberOfAyahs": 28,
      "revelationType": "مكيه"
    },
    {
      "index": 73,
      "question": "المزّمّل",
      "name": "سُورَةُ المُزَّمِّلِ",
      "englishName": "Al-Muzzammil",
      "englishNameTranslation": "The Enshrouded One",
      "numberOfAyahs": 20,
      "revelationType": "مكيه"
    },
    {
      "index": 74,
      "question": "المدّثر",
      "name": "سُورَةُ المُدَّثِّرِ",
      "englishName": "Al-Muddaththir",
      "englishNameTranslation": "The Cloaked One",
      "numberOfAyahs": 56,
      "revelationType": "مكيه"
    },
    {
      "index": 75,
      "question": "القيامة",
      "name": "سُورَةُ القِيَامَةِ",
      "englishName": "Al-Qiyaama",
      "englishNameTranslation": "The Resurrection",
      "numberOfAyahs": 40,
      "revelationType": "مكيه"
    },
    {
      "index": 76,
      "question": "الإنسان",
      "name": "سُورَةُ الإِنسَانِ",
      "englishName": "Al-Insaan",
      "englishNameTranslation": "Man",
      "numberOfAyahs": 31,
      "revelationType": "مدنيه"
    },
    {
      "index": 77,
      "question": "المرسلات",
      "name": "سُورَةُ المُرۡسَلَاتِ",
      "englishName": "Al-Mursalaat",
      "englishNameTranslation": "The Emissaries",
      "numberOfAyahs": 50,
      "revelationType": "مكيه"
    },
    {
      "index": 78,
      "question": "النبأ",
      "name": "سُورَةُ النَّبَإِ",
      "englishName": "An-Naba",
      "englishNameTranslation": "The Announcement",
      "numberOfAyahs": 40,
      "revelationType": "مكيه"
    },
    {
      "index": 79,
      "question": "النازعات",
      "name": "سُورَةُ النَّازِعَاتِ",
      "englishName": "An-Naazi'aat",
      "englishNameTranslation": "Those who drag forth",
      "numberOfAyahs": 46,
      "revelationType": "مكيه"
    },
    {
      "index": 80,
      "question": "عبس",
      "name": "سُورَةُ عَبَسَ",
      "englishName": "Abasa",
      "englishNameTranslation": "He frowned",
      "numberOfAyahs": 42,
      "revelationType": "مكيه"
    },
    {
      "index": 81,
      "question": "التكوير",
      "name": "سُورَةُ التَّكۡوِيرِ",
      "englishName": "At-Takwir",
      "englishNameTranslation": "The Overthrowing",
      "numberOfAyahs": 29,
      "revelationType": "مكيه"
    },
    {
      "index": 82,
      "question": "الإنفطار",
      "name": "سُورَةُ الانفِطَارِ",
      "englishName": "Al-Infitaar",
      "englishNameTranslation": "The Cleaving",
      "numberOfAyahs": 19,
      "revelationType": "مكيه"
    },
    {
      "index": 83,
      "question": "المطفّفين",
      "name": "سُورَةُ المُطَفِّفِينَ",
      "englishName": "Al-Mutaffifin",
      "englishNameTranslation": "Defrauding",
      "numberOfAyahs": 36,
      "revelationType": "مكيه"
    },
    {
      "index": 84,
      "question": "الإنشقاق",
      "name": "سُورَةُ الانشِقَاقِ",
      "englishName": "Al-Inshiqaaq",
      "englishNameTranslation": "The Splitting Open",
      "numberOfAyahs": 25,
      "revelationType": "مكيه"
    },
    {
      "index": 85,
      "question": "البروج",
      "name": "سُورَةُ البُرُوجِ",
      "englishName": "Al-Burooj",
      "englishNameTranslation": "The Constellations",
      "numberOfAyahs": 22,
      "revelationType": "مكيه"
    },
    {
      "index": 86,
      "question": "الطارق",
      "name": "سُورَةُ الطَّارِقِ",
      "englishName": "At-Taariq",
      "englishNameTranslation": "The Morning Star",
      "numberOfAyahs": 17,
      "revelationType": "مكيه"
    },
    {
      "index": 87,
      "question": "الأعلى",
      "name": "سُورَةُ الأَعۡلَىٰ",
      "englishName": "Al-A'laa",
      "englishNameTranslation": "The Most High",
      "numberOfAyahs": 19,
      "revelationType": "مكيه"
    },
    {
      "index": 88,
      "question": "الغاشية",
      "name": "سُورَةُ الغَاشِيَةِ",
      "englishName": "Al-Ghaashiya",
      "englishNameTranslation": "The Overwhelming",
      "numberOfAyahs": 26,
      "revelationType": "مكيه"
    },
    {
      "index": 89,
      "question": "الفجر",
      "name": "سُورَةُ الفَجۡرِ",
      "englishName": "Al-Fajr",
      "englishNameTranslation": "The Dawn",
      "numberOfAyahs": 30,
      "revelationType": "مكيه"
    },
    {
      "index": 90,
      "question": "البلد",
      "name": "سُورَةُ البَلَدِ",
      "englishName": "Al-Balad",
      "englishNameTranslation": "The City",
      "numberOfAyahs": 20,
      "revelationType": "مكيه"
    },
    {
      "index": 91,
      "question": "الشمس",
      "name": "سُورَةُ الشَّمۡسِ",
      "englishName": "Ash-Shams",
      "englishNameTranslation": "The Sun",
      "numberOfAyahs": 15,
      "revelationType": "مكيه"
    },
    {
      "index": 92,
      "question": "الليل",
      "name": "سُورَةُ اللَّيۡلِ",
      "englishName": "Al-Lail",
      "englishNameTranslation": "The Night",
      "numberOfAyahs": 21,
      "revelationType": "مكيه"
    },
    {
      "index": 93,
      "question": "الضحى",
      "name": "سُورَةُ الضُّحَىٰ",
      "englishName": "Ad-Dhuhaa",
      "englishNameTranslation": "The Morning Hours",
      "numberOfAyahs": 11,
      "revelationType": "مكيه"
    },
    {
      "index": 94,
      "question": "الشرح",
      "name": "سُورَةُ الشَّرۡحِ",
      "englishName": "Ash-Sharh",
      "englishNameTranslation": "The Consolation",
      "numberOfAyahs": 8,
      "revelationType": "مكيه"
    },
    {
      "index": 95,
      "question": "التين",
      "name": "سُورَةُ التِّينِ",
      "englishName": "At-Tin",
      "englishNameTranslation": "The Fig",
      "numberOfAyahs": 8,
      "revelationType": "مكيه"
    },
    {
      "index": 96,
      "question": "العلق",
      "name": "سُورَةُ العَلَقِ",
      "englishName": "Al-Alaq",
      "englishNameTranslation": "The Clot",
      "numberOfAyahs": 19,
      "revelationType": "مكيه"
    },
    {
      "index": 97,
      "question": "القدر",
      "name": "سُورَةُ القَدۡرِ",
      "englishName": "Al-Qadr",
      "englishNameTranslation": "The Power, Fate",
      "numberOfAyahs": 5,
      "revelationType": "مكيه"
    },
    {
      "index": 98,
      "question": "البينة",
      "name": "سُورَةُ البَيِّنَةِ",
      "englishName": "Al-Bayyina",
      "englishNameTranslation": "The Evidence",
      "numberOfAyahs": 8,
      "revelationType": "مدنيه"
    },
    {
      "index": 99,
      "question": "الزلزلة",
      "name": "سُورَةُ الزَّلۡزَلَةِ",
      "englishName": "Az-Zalzala",
      "englishNameTranslation": "The Earthquake",
      "numberOfAyahs": 8,
      "revelationType": "مدنيه"
    },
    {
      "index": 100,
      "question": "العاديات",
      "name": "سُورَةُ العَادِيَاتِ",
      "englishName": "Al-Aadiyaat",
      "englishNameTranslation": "The Chargers",
      "numberOfAyahs": 11,
      "revelationType": "مكيه"
    },
    {
      "index": 101,
      "question": "القارعة",
      "name": "سُورَةُ القَارِعَةِ",
      "englishName": "Al-Qaari'a",
      "englishNameTranslation": "The Calamity",
      "numberOfAyahs": 11,
      "revelationType": "مكيه"
    },
    {
      "index": 102,
      "question": "التكاثر",
      "name": "سُورَةُ التَّكَاثُرِ",
      "englishName": "At-Takaathur",
      "englishNameTranslation": "Competition",
      "numberOfAyahs": 8,
      "revelationType": "مكيه"
    },
    {
      "index": 103,
      "question": "العصر",
      "name": "سُورَةُ العَصۡرِ",
      "englishName": "Al-Asr",
      "englishNameTranslation": "The Declining Day, Epoch",
      "numberOfAyahs": 3,
      "revelationType": "مكيه"
    },
    {
      "index": 104,
      "question": "الهمزة",
      "name": "سُورَةُ الهُمَزَةِ",
      "englishName": "Al-Humaza",
      "englishNameTranslation": "The Traducer",
      "numberOfAyahs": 9,
      "revelationType": "مكيه"
    },
    {
      "index": 105,
      "question": "الفيل",
      "name": "سُورَةُ الفِيلِ",
      "englishName": "Al-Fil",
      "englishNameTranslation": "The Elephant",
      "numberOfAyahs": 5,
      "revelationType": "مكيه"
    },
    {
      "index": 106,
      "question": "قريش",
      "name": "سُورَةُ قُرَيۡشٍ",
      "englishName": "Quraish",
      "englishNameTranslation": "Quraysh",
      "numberOfAyahs": 4,
      "revelationType": "مكيه"
    },
    {
      "index": 107,
      "question": "الماعون",
      "name": "سُورَةُ المَاعُونِ",
      "englishName": "Al-Maa'un",
      "englishNameTranslation": "Almsgiving",
      "numberOfAyahs": 7,
      "revelationType": "مكيه"
    },
    {
      "index": 108,
      "question": "الكوثر",
      "name": "سُورَةُ الكَوۡثَرِ",
      "englishName": "Al-Kawthar",
      "englishNameTranslation": "Abundance",
      "numberOfAyahs": 3,
      "revelationType": "مكيه"
    },
    {
      "index": 109,
      "question": "الكافرون",
      "name": "سُورَةُ الكَافِرُونَ",
      "englishName": "Al-Kaafiroon",
      "englishNameTranslation": "The Disbelievers",
      "numberOfAyahs": 6,
      "revelationType": "مكيه"
    },
    {
      "index": 110,
      "question": "النصر",
      "name": "سُورَةُ النَّصۡرِ",
      "englishName": "An-Nasr",
      "englishNameTranslation": "Divine Support",
      "numberOfAyahs": 3,
      "revelationType": "مدنيه"
    },
    {
      "index": 111,
      "question": "المسد",
      "name": "سُورَةُ المَسَدِ",
      "englishName": "Al-Masad",
      "englishNameTranslation": "The Palm Fibre",
      "numberOfAyahs": 5,
      "revelationType": "مكيه"
    },
    {
      "index": 112,
      "question": "الإخلاص",
      "name": "سُورَةُ الإِخۡلَاصِ",
      "englishName": "Al-Ikhlaas",
      "englishNameTranslation": "Sincerity",
      "numberOfAyahs": 4,
      "revelationType": "مكيه"
    },
    {
      "index": 113,
      "question": "الفلق",
      "name": "سُورَةُ الفَلَقِ",
      "englishName": "Al-Falaq",
      "englishNameTranslation": "The Dawn",
      "numberOfAyahs": 5,
      "revelationType": "مكيه"
    },
    {
      "index": 114,
      "question": "النّاس",
      "name": "سُورَةُ النَّاسِ",
      "englishName": "An-Naas",
      "englishNameTranslation": "Mankind",
      "numberOfAyahs": 6,
      "revelationType": "مكيه"
    }
  ]

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setAnswer(null);
    setError(null);
  };

  const handleAnswerQuestion = async () => {
    if (!query) {
      setError('اكتب اسم السورة أولاً');
      return;
    }

    setLoading(true);

    try {
      const matchingAyat = ayatData.find(
        (ayat) => ayat.question.toLowerCase() === query.toLowerCase()
      );

      if (matchingAyat) {
        setAnswer(matchingAyat);
      } else {
        setError('لم يتم العثور على سورة بهذا الاسم');
      }
    } catch (error) {
      console.error(error);
      setError('Error searching for Surah. Please try again.');
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  return (
    <div>
      <div className="container-fluid test-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="test-header-inner animated zoomIn">
                <h1 className="display-1 text-dark"> معلومات عن السور</h1>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="#">الرئيسيه</a>
                  </li>
                  <li className="breadcrumb-item text-dark" aria-current="page">
                    تفسير القران
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container answer-container mt-5">
        <div className="row">
          <div className="col-md-12 answer-square">
            <label for="searchQuestion" className="form-label">
              اسم السوره:
            </label>
            <input
              type="text"
              className="form-control"
              id="searchQuestion"
              value={query}
              onChange={handleInputChange}
              placeholder="اكتب اسم السورة"
            />
            <button
              type="button"
              className="answer-btn"
              id="searchButton"
              onClick={handleAnswerQuestion}
            >
              بحث
            </button>

            {answer && (
              <div className="answer">
                <h2>نتيجة البحث:</h2>
                <ul>
                  <li>
                    <b>الاسم:</b> {answer.name}
                  </li>
                  <li>
                    <b>الاسم الانجليزي:</b> {answer.englishName}
                  </li>
                  <li>
                    <b>الترجمة الانجليزية للاسم:</b>{" "}
                    {answer.englishNameTranslation}
                  </li>
                  <li>
                    <b>عدد الآيات:</b> {answer.numberOfAyahs}
                  </li>
                  <li>
                    <b>نوع السورة:</b> {answer.revelationType}
                  </li>
                </ul>
              </div>
            )}
            {error && (
              <p style={{ color: 'red' }} className="error">
                {error}
              </p>
            )}
            {loading && (
              <p style={{ color: 'red' }}>انتظر جارى التحميل ...</p>
            )}
          </div>
        </div>
      </div>
    </div>

  );
}

export default QuranSearch;
