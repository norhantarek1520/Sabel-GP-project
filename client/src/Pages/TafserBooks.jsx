import React, { useState, useEffect } from 'react';

function TafserBooks() {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Assuming your bookData is an array of objects with Surah information
  const bookData =[
    {
      "id": 1,
      "name": "التفسير الميسر",
      "language": "اللغه العربيه",
      "author": "نخبة من العلماء",
      "book_name": "التفسير الميسر"
    },
    {
      "id": 2,
      "name": "تفسير الجلالين",
      "language": "اللغه العربيه",
      "author": "جلال الدين المحلي و السيوطي",
      "book_name": "تفسير الجلالين"
    },
    {
      "id": 3,
      "name": "تفسير السعدي",
      "language": "اللغه العربيه",
      "author": "عبد الرحمن بن ناصر بن عبد الله السعدي التميمي مفسر",
      "book_name": "تيسير الكريم الرحمن في تفسير كلام المنان"
    },
    {
      "id": 4,
      "name": "تفسير ابن كثير",
      "language": "اللغه العربيه",
      "author": "عماد الدين أبي الفداء إسماعيل بن كثير القرشي",
      "book_name": "تفسير القرآن العظيم",
      "info": "البداية والنهاية",
      "date": "774 هـ"
    },
    {
      "id": 5,
      "name": "تفسير الوسيط لطنطاوي",
      "language": "اللغه العربيه",
      "author": "محمد سيد طنطاوي",
      "book_name": "التفسير الوسيط للقرآن الكريم"
    },
    {
      "id": 6,
      "name": "تفسير البغوي",
      "language": "اللغه العربيه",
      "author": "الحسين بن مسعود البغوي أبو محمد",
      "book_name": "معالم التنزيل",
      "info": "معالم التنزيل",
      "date": "510 هـ"
    },
    {
      "id": 7,
      "name": "تفسير القرطبي",
      "language": "اللغه العربيه",
      "author": "أبو عبد الله محمد بن أحمد الأنصاري القرطبي",
      "book_name": "الجامع لأحكام القرآن" ,
      "info": "الجامع لأحكام القرآن",
      "date": "671 هـ" 
    },
    {
      "id": 8,
      "name": "تفسير الطبري",
      "language": "اللغه العربيه",
      "author": "الإمام أبو جعفر الطبري",
      "book_name": "جامع البيان في تأويل القرآن",
      "info": "جامع البيان عن تأويل القرآن",
      "date": "310 هـ"
    },
    {
      "id": 9,
      "name": "Arberry",
      "language": "en",
      "author": "A. J. Arberry",
      "book_name": "The Koran Interpreted"
    },
    {
      "id": 10,
      "name": "Yusuf Ali",
      "language": "en",
      "author": "Abdullah Yusuf Ali",
      "book_name": "The Meaning of the Glorious Koran"
    },
    {
      "id": 11,
      "name": "Keyzer",
      "language": "Dutch",
      "author": "Salomo Keyzer",
      "book_name": "De Koran, voorafgegaan door het leven van Mahomet"
    },
    {
      "id": 12,
      "name": "Leemhuis",
      "language": "Dutch",
      "author": "Fred Leemhuis",
      "book_name": "De Koran: Een weergave van de betekenis van de Ara"
    },
    {
      "id": 13,
      "name": "Siregar",
      "language": "Dutch",
      "author": "Sofian S. Siregar",
      "book_name": "De Edele Koran, en een vertaling van betekenissen"
    }, 
   {
      "id" :14 ,
      "name": "تفسير الرازي",
      "language": "اللغه العربيه",
      "author": "الشيخ فخر الدين محمد بن عمر الرازي",
      "info": "مفاتيح الغيب",
      "date": "606 هـ" , 
      "book_name":  "تفسير الرازي"
    },
  
    {
      "id" : 15 ,
      "name": "تفسير الثعالبي",
      "language": "اللغه العربيه",
      "author": "أبو زيد عبد الرحمن بن محمد الثعالبي",
      "info": "الجواهر الحسان في تفسير القرآن",
      "date": "872 هـ",
      "book_name": "تفسير الثعالبي"
    },
    {
      "id" : 16 ,
      "name": "تفسير ابن عطية",
      "language": "اللغه العربيه",
      "author": "أبو محمد عبد الحق بن غالب بن عطية",
      "info": "المحرّر الوجيز في تفسير الكتاب العزيز",
      "date": "541 هـ" , 
      "book_name": "تفسير ابن عطية",
    },
    {
      "id" : 17 ,
      "name": "تفسير السيوطي",
      "author": "الحافظ جلال الدين بن أبي بكر عبد الرحمن السيوطي",
      "info": "الدر المنثور في التفسير بالمأثور",
      "date": "911 هـ" ,
      "book_name":  "تفسير السيوطي",
      "language": "اللغه العربيه",
    },
    {
      "id": 18,
      "name": "تفسير الشوكاني",
      "author": "محمد بن علي الشوكاني",
      "info": "فتح القدير، الجامع بين فَنَّى الرواية والدراية من علم التفسير",
      "date": "1250 هـ", 
      "book_name": "تفسير الشوكاني",
      "language": "اللغه العربيه",
    }
  ]

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setAnswer(null);
    setError(null);
  };

  const handleAnswerQuestion = async () => {
    if (!query) {
      setError('اكتب اسم الكتاب أولاً');
      return;
    }

    setLoading(true);

    try {
      const matchingAyat = bookData.find(
        (ayat) => ayat.name.toLowerCase() === query.toLowerCase()
      );

      if (matchingAyat) {
        setAnswer(matchingAyat);
      } else {
        setError('لم يتم العثور على كتاب بهذا الاسم');
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
                <h1 className="display-1 text-dark"> معلومات عن كتب التفسير</h1>
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
              اسم الكتاب:
            </label>
            <input
              type="text"
              className="form-control"
              id="searchQuestion"
              value={query}
              onChange={handleInputChange}
              placeholder="اكتب اسم الكتاب"
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
                    <b>اسم الشهره (السوق):</b> {answer.book_name}
                  </li>
                  <li>
                    <b>اسم الكاتب  :</b> {answer.author}
                  </li>               
                  <li>
                    <b> لغه الكتاب</b> {answer.language}
                  </li>
                  <li>
                    <b> تاريخ اصدار الكتاب</b> {answer.date}
                  </li>
                  <li>
                    <b> وصف الكتاب</b> {answer.info}
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

export default TafserBooks;
