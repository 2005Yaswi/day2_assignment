import CardUI from "./Card";
function CardList(){
    //const name="React";
    //const college="SVECCW";
    //const userobject={name1:"Stphen",branch:"AIDS",year:"3"};
    const names=['Scott Ayres   .2nd','Richard Beeson    .2nd','Jacob Hilpertsh...    .2nd','Stephanie Swee...   .2nd','Sarah Hecker   .2nd','Curt Ziegier   .2nd','Hannah Recker .2nd','Michael Angiletta .2nd'];
    const describe=['busting social media myths at social media','Saas customer on boarrding manager/Producer','Harness your social media and engagement','Customer support / Software  QA Tester','US Support & Affiliate Manager','Customer support Hero at agorapulse','Inbound & Marketing Operations Manager','Growth Marketing| CMO|Agorapulse'];
    const conn=['23 shared connections','7 shared connections','5 shared connections','4 shared connections','3 shared connections','3 shared connections','4 shared connections','3 shared connections'];
    return (
        <div style={{display:'flex',flexWrap:'wrap',textAlign:'center'}}>
            {names.map((name,index)=><CardUI key={index} program={name} col={describe[index]} user={conn[index]}/>)
            
    }
        </div>
    )
}
export default CardList;