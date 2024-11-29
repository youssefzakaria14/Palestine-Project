import React, { Component, Fragment } from "react";
import "./Test.css";
import 'react-router-dom';
import  Counttt from'../../Components/Counttt/Counttt.jsx';
import Navbar from "../Navbar/Navbar.jsx";

export default class test extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>
        <section className="big-table">
          <div className="title">
            <h1>
              List of journalists killed in the 2023-2024 Palestinian-Israeli
              war
            </h1>
          </div>
          <div className="container">
            <div className="hero">
              
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Date</th>
                      <th scope="col">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="https://www.journalistsupport.net/article.php?id=379097">
                          <strong>
                            Mohammed Al-Salehi
                            <br /> محمد الصالحي
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 7, 2023 <br /> 7 أكتوبر 2023
                      </td>
                      <td>
                        A photojournalist working for the Fourth Estate News
                        Agency was shot near a Palestinian refugee camp in
                        central Gaza.
                        <br />
                        مصور صحفي يعمل لدى وكالة أنباء السلطة الرابعة، تم إطلاق
                        نار عليه بالقرب من مخيم للاجئين الفلسطينيين وسط قطاع
                        غزة.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.youtube.com/watch?v=zYKrPGRovlA">
                          <strong>
                            Mohammed Jarghon
                            <br /> محمد جرغون{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 7, 2023 <br /> 7 أكتوبر 2023
                      </td>
                      <td>
                        A photographer for Ein Media, he was shot and killed at
                        the Erez crossing from Gaza into Israel.
                        <br />
                        مصور لدى عين ميديا تم إطلاق النار عليه وقتل عند معبر
                        إيرز من غزة إلى إسرائيل.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="/">
                          <strong>
                            Ibrahim Mohammed Lafi
                            <br /> إبراهيم محمد لافي{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 7, 2023 <br /> 7 أكتوبر 2023
                      </td>
                      <td>
                        A photojournalist working for the Fourth Estate News
                        Agency was shot near a Palestinian refugee camp in
                        central Gaza.
                        <br />
                        مصور صحفي يعمل لدى وكالة أنباء السلطة الرابعة، تم إطلاق
                        نار عليه بالقرب من مخيم للاجئين الفلسطينيين وسط قطاع
                        غزة.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202309901">
                          <strong>
                            Asaad Abdel Nasser Shamlakh
                            <br />
                            أسعد عبد الناصر شملخ{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 8, 2023 <br />8 أكتوبر 2023
                      </td>
                      <td>
                        Freelance journalist, killed with nine members of his
                        family in an Israeli airstrike on their home in Sheikh
                        Ajleen.
                        <br />
                        صحفي مستقل، قُتل مع تسعة من أفراد عائلته في غارة جوية
                        إسرائيلية على منزلهم في الشيخ عجلين.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202318648">
                          <strong>
                            Anas Ibrahim Hussein Abu Shamala
                            <br /> أنس إبراهيم حسين أبو شمالة
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 9, 2023 <br /> 9 أكتوبر 2023
                      </td>
                      <td>
                        Journalist, killed in Israeli airstrikes on Deir
                        al-Balah.
                        <br />
                        صحفي، استشهد جراء غارات جوية إسرائيلية على دير البلح.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.facebook.com/AJA.Palestine/videos/%D8%A7%D9%84%D8%B1%D8%B3%D8%A7%D9%84%D8%A9-%D8%A7%D9%84%D8%A3%D8%AE%D9%8A%D8%B1%D8%A9-%D9%84%D9%84%D8%B5%D8%AD%D9%81%D9%8A-%D8%A7%D9%84%D8%B4%D9%87%D9%8A%D8%AF-%D9%87%D8%B4%D8%A7%D9%85-%D8%A7%D9%84%D9%86%D9%88%D8%A7%D8%AC%D8%AD%D8%A9/720430693435466/">
                          <strong>
                            Hisham Al-Nawajha
                            <br /> هشام النواجحة{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 10, 2023 <br /> 10 أكتوبر 2023
                      </td>
                      <td>
                        A journalist from the Palestinian news agency Khabar,
                        was killed in an Israeli airstrike on the Al-Rimal
                        neighborhood (Gaza), an area that includes many media
                        institutions.
                        <br />
                        صحفي من وكالة الأنباء الفلسطينية خبر، قُتل في غارة جوية
                        إسرائيلية على حي الرمال (غزة) في منطقة تضم العديد من
                        المؤسسات الإعلامية.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.journalistsupport.net/article.php?id=379097">
                          <strong>
                            Saeed Radwan Al-Tawil
                            <br /> سعيد رضوان الطويل
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 10, 2023 <br /> 10 أكتوبر 2023
                      </td>
                      <td>
                        Editor-in-chief of Al-Khamsa News, killed in airstrike
                        on Al-Rimal.
                        <br />
                        رئيس تحرير الخمسة نيوز '، قُتل في غارة جوية على الرمال.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202308715">
                          <strong>
                            Mohamed Rizk Sobh
                            <br /> محمد رزق صبح{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 10, 2023 <br /> 10 أكتوبر 2023
                      </td>
                      <td>
                        Photographer for Al-Khabar newspaper, killed in
                        airstrike on Al-Rimal.
                        <br />
                        مصور لصحيفة الخبر، قُتل في غارة جوية على الرمال.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202308780">
                          <strong>
                            Saeed Radwan Al-Tawil
                            <br /> سعيد رضوان الطويل{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 9, 2023 <br /> 9 أكتوبر 2023
                      </td>
                      <td>
                        Editor-in-chief of Al-Khamsa News, killed in airstrike
                        on Al-Rimal.
                        <br />
                        رئيس تحرير الخمسة نيوز '، قُتل في غارة جوية على الرمال.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.journalistsupport.net/article.php?id=379097">
                          <strong>
                            Mohammed Al-Salehi
                            <br /> محمد الصالحي
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 11, 2023 <br /> 11 أكتوبر 2023
                      </td>
                      <td>
                        A photojournalist working for the Fourth Estate News
                        Agency was shot near a Palestinian refugee camp in
                        central Gaza.
                        <br />
                        مصور صحفي يعمل لدى وكالة أنباء السلطة الرابعة، تم إطلاق
                        نار عليه بالقرب من مخيم للاجئين الفلسطينيين وسط قطاع
                        غزة.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.unesco.org/ar/articles/almdyrt-alamt-llywnskw-tdyn-mqtl-almswr-mhmd-fayz-abw-mtr-fy-flstyn">
                          <strong>
                            Mohammed Fayez Abu Matar
                            <br /> محمد فايز أبو مطر{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 11, 2023 <br /> 11 أكتوبر 2023
                      </td>
                      <td>
                        Freelance photojournalist, killed in Israeli airstrike
                        on Rafah.
                        <br />
                        مصور صحفي مستقل، قُتل في غارة جوية إسرائيلية على مدينة
                        رفح.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202312181">
                          <strong>
                            Ahmed Nahed Hassan Masoud
                            <br /> أحمد ناهض حسن مسعود
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 11, 2023 <br /> 11 أكتوبر 2023
                      </td>
                      <td>
                        He was killed in an Israeli air strike on the Gaza
                        Strip.
                        <br />
                        استشهد في غارة جوية إسرائيلية على قطاع غزة.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202310199">
                          <strong>
                            Rajab Mohammed Rajab Al-Naqeeb
                            <br /> رجب محمد رجب النقيب{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 11, 2023 <br /> 11 أكتوبر 2023
                      </td>
                      <td>
                        He was killed along with his wife, children, parents and
                        all his siblings in an Israeli air strike on their
                        residential building in the Gaza Strip.
                        <br />
                        استشهد مع زوجته وأطفاله ووالديه وجميع أشقائه في غارة
                        جوية إسرائيلية على عمارتهم السكنية في قطاع غزة.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.shireen.ps/martyrs/show/202310213">
                          <strong>
                            Mustafa Mohamed Ragab Al-Naqeeb
                            <br /> مصطفى محمد رجب النقيب{" "}
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 11, 2023 <br /> 11 أكتوبر 2023
                      </td>
                      <td>
                        Palestinian journalist and researcher, he was killed
                        along with his family and daughter in an Israeli air
                        strike on the Gaza Strip.
                        <br />
                        وكالة أنباء السلطة الرابعة، تم إطلاق نار عليه بالقرب من
                        مخيم للاجئين الفلسطينيين وسط قطاع غزة.
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <a href="https://www.journalistsupport.net/article.php?id=379097">
                          <strong>
                            Mohammed Al-Salehi
                            <br /> محمد الصالحي
                          </strong>
                        </a>
                      </td>
                      <td>
                        October 7, 2023 <br /> 7 أكتوبر 2023
                      </td>
                      <td>
                        A photojournalist working for the Fourth Estate News
                        Agency was shot near a Palestinian refugee camp in
                        central Gaza.
                        <br />
                        مصور صحفي يعمل لدى وكالة أنباء السلطة الرابعة، تم إطلاق
                        نار عليه بالقرب من مخيم للاجئين الفلسطينيين وسط قطاع
                        غزة.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="btn">
                  <a
                    className="btn btn-danger"
                    href="https://ar.wikipedia.org/wiki/%D9%82%D8%A7%D8%A6%D9%85%D8%A9_%D8%A7%D9%84%D8%B5%D8%AD%D9%81%D9%8A%D9%8A%D9%86_%D8%A7%D9%84%D8%B0%D9%8A%D9%86_%D9%82%D8%AA%D9%84%D9%88%D8%A7_%D9%81%D9%8A_%D8%A7%D9%84%D8%AD%D8%B1%D8%A8_%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9_%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9_2023-2024"
                  >
                    SHOW MORE{" "}
                  </a>
                </div>
              </div>
            </div>
            <Counttt/>
          
        </section>

        
      </Fragment>
    );
  }
}
