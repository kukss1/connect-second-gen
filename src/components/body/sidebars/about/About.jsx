import React from "react";
import "./About.css";
import Navigation from "../../navigation/Navigation";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about_wrapper">
      <div className="about_body">
        <div className="idea">
          <h1>
            2020-ին ի հայտ եկած գաղափարը վերածվեց սպասված իրականության 2024-ում։
          </h1>
        </div>
        <div className="profit">
          <h3>
            Ընկերությունը նախագծված է առաջարկելու ոչ միայն եկամտի նոր
            աղբյուրներ, այլ նաև պարզ, ինտուիտիվ լուծումներ նրանց համար, ովքեր
            ձգտում են խնայել իրենց ժամանակը բարդ և ժամանակատար ֆինանսական
            հետազոտությունների համար: Մեր ջանքերը կենտրոնացած են նորարարական
            լուծումների ստեղծման վրա, որոնք թույլ են տալիս հզորացնել ֆինանսական
            կայունությունը` առանց դժվարությունների: Մեր ընկերությունը կառուցվել
            է բարձր առաքելությամբ՝ դառնալ հիմնաքար նրանց համար, ովքեր ցանկանում
            են գտնել եկամտի նոր աղբյուր և ազատվել վստահության մեջ գտնվող կեղծ
            կազմակերպություններից, որոնք խոստանում են անհավանական ֆինանսական
            շահույթներ: CC-ն պարզապես ընկերություն չէ, այն ձեր հաջողության
            գործընկերն է: Որի առաքելությունն է ապահովել հեշտ մուտք դեպի նոր
            հեռանկարներ՝ տրամադրելով ապացուցված և արդյունավետ մեթոդներ
            ֆինանսական բարեկեցության հասնելու համար: Մենք պայքարում ենք
            կենտրոնացված կապիտալի եվ կեղծ կազմակերպությունների դեմ, որոնք
            խաթարում են վստահությունը և ձգտում են դառնալ մոնոպոլիստական ,
            գերշահույթ ստացող հիպերկորպորացիաների։ CC-ն առաջարկում է ապակենտրոն
            կապիտալի միջոցով զարգացնել եվ հզորացնել մեր պետությունը , խթանելով
            միջին խավի աճը և հնարավորության չափով նվազեցնել աղքատության
            ցուցանիշը։
          </h3>
        </div>
        <Link to="/">Գլխավոր Էջ</Link>
      </div>
      <aside>
        <Navigation />
      </aside>
    </div>
  );
};

export default About;
