const questions=[
  { question:'the sexual cycle is controlled by??',
  answers:[
    {text:'hypothalamus', correct:true}, {text:'cerebrum', correct:false}, {text:'autonomic system', correct:false}, {text:'sensation', correct:false},
  ]},
  { question:'what is the maximum number of follicle that reach maturity under normal condition?',
  answers:[
    {text:'2', correct:false}, {text:'1', correct:true}, {text:'3', correct:false}, {text:'4', correct:false},
  ]},
  { question:'the slight pain felt by most women during ovulation is called ?',
  answers:[
    {text:'early pain', correct:false}, {text:'middle pain', correct:true}, {text:'late pain', correct:false}, {text:'none', correct:false},
  ]},
  { question:'the process by which female and male gametes fused is known as------?',
  answers:[
    {text:'mating', correct:false}, {text:'stimulation', correct:false}, {text:'fertilization', correct:true}, {text:'ovulation', correct:false},
  ]},
  { question:'how many % of sperm deposited into the vagina get to the cervix ?',
  answers:[
    {text:'10%', correct:false}, {text:'20%', correct:false}, {text:'5%', correct:false}, {text:'1%', correct:true},
  ]},
  { question:'The trip of sperm from the cervix to oviduct requires a minimum of ?',
  answers:[
    {text:'2 day', correct:false}, {text:'2 hour', correct:true}, {text:'2 minute', correct:false}, {text:'2 second', correct:false},
  ]},
  { question:'about ------ sperms are released into the female genital tract during mating?',
  answers:[
    {text:'200-400thousand', correct:false}, {text:'200-300Million', correct:true}, {text:'50-30Million', correct:false}, {text:'4-5Million', correct:false},
  ]},
  { question:'if the male condom is made of latex, then the female condom is made of-----? ?',
  answers:[
    {text:'latex', correct:false}, {text:'polyethene', correct:false}, {text:'rubber', correct:false}, {text:'polyurethane', correct:true},
  ]},
  { question:'contraceptive pills are taken for a period of------days ?',
  answers:[
    {text:'21', correct:true}, {text:'14', correct:false}, {text:'28', correct:false}, {text:'30', correct:false},
  ]},
  { question:'what is thw drug RU-486(mifepristone) used for ?',
  answers:[
    {text:'pain', correct:false}, {text:'antidepressant', correct:false}, {text:'abortion', correct:true}, {text:'acne', correct:false},
  ]},
  { question:'laparoscopy is a method used for the extraction of-------?',
  answers:[
    {text:'sperms', correct:false}, {text:'embryo', correct:false}, {text:'occytes', correct:true}, {text:'zygote', correct:false},
  ]},
  { question:' the risk of producing malformed offspring by in vitro procedures is  ?',
  answers:[
    {text:'low', correct:true}, {text:'mild', correct:false}, {text:'high', correct:false}, {text:'very high', correct:false},
  ]},
  { question:'Severe male infertility, in which the ejaculate contains very few live sperm is called  ?',
  answers:[
    {text:'monozoospermia', correct:false}, {text:'polyzoospermia', correct:false}, {text:'dyszoospermia', correct:false}, {text:'oligozoospermia', correct:true},
  ]},
  { question:'the wall of the utrerus consist of ----------layers ?',
  answers:[
    {text:'1', correct:false}, {text:'2', correct:false}, {text:'3', correct:false}, {text:'4', correct:true},
  ]},
  { question:'------is a series of mitotic divisions that results in an increase in cells?',
  answers:[
    {text:'cleavege', correct:true}, {text:'duplication', correct:false}, {text:'complexization', correct:false}, {text:'none', correct:false},
  ]},
  { question:'What is one of the primary causes of infertility in men ?',
  answers:[
    {text:'low sex drive', correct:false}, {text:'low sperm count', correct:true}, {text:'azoospermia', correct:false}, {text:'high sperm count', correct:false},
  ]},
  { question:'what is the fraction of the implanting genome derived from the father?',
  answers:[
    {text:'1/3', correct:false}, {text:'1/2', correct:true}, {text:'1/4', correct:false}, {text:'1', correct:false},
  ]},
   { question:'the neo-natal period is in the development of a ----- ?',
   answers:[
     {text:'brain', correct:false}, {text:'baby', correct:true}, {text:'lungs', correct:false}, {text:'limbs', correct:false},
   ]},
  // { question:'fertilization takes place in which part/region of the falliopian tube?',
  // answers:[
  //   {text:'isthmus', correct:false}, {text:'ampulla', correct:true}, {text:'infundibulum', correct:false}, {text:'fambria', correct:false},
  // ]},
  // { question:'in what period of embrayonic development is the syncythiotropoblast formed ?',
  // answers:[
  //   {text:'week 1', correct:false}, {text:'weeek 2', correct:true}, {text:'week 3', correct:false}, {text:'none', correct:false},
  // ]},
  // { question:'what form the floor of the amniotic sac?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { question:'about-------primary ooctyes become secondary ooctyes ?',
  // answers:[
  //   {text:'4000', correct:false}, {text:'400', correct:true}, {text:'40000', correct:false}, {text:'40', correct:false},
  // ]},
  // { question:'down syndrome is an example of------ ?',
  // answers:[
  //   {text:'monosomy', correct:false}, {text:'trisomy', correct:true}, {text:'polysomy', correct:false}, {text:'none', correct:false},
  // ]},
  // { question:'about----% of sperm ejaculate should be present after 2 hour ?',
  // answers:[
  //   {text:'100%', correct:false}, {text:'50%', correct:true}, {text:'10%', correct:false}, {text:'1%', correct:false},
  // ]},
  // { question:'during menstration -------- and ------------- layer is shedded?',
  // answers:[
  //   {text:'epimetrium and mesometrium', correct:false}, {text:'mesometrium and endometrium', correct:false}, {text:'epimetrium and endometrium', correct:false}, {text:'endometrium only', correct:true},
  // ]},
  // { questions:'endometrium is divided into ---- layers?',
  // answers:[
  //   {text:'3', correct:true}, {text:'2', correct:false}, {text:'4', correct:false}, {text:'6', correct:false},
  // ]},
  // { questions:'the uterus is ---- thick?',
  // answers:[
  //   {text:'2-3mm', correct:true}, {text:'2-3cm', correct:false}, {text:'1-2m', correct:false}, {text:'20-30nm', correct:false},
  // ]},
  // { questions:'the longest phase in menstral cycle is-----?',
  // answers:[
  //   {text:'luteal period', correct:true}, {text:'proliferation period', correct:false}, {text:'ischemic period', correct:false}, {text:'all of the above', correct:false},
  // ]},
  // { questions:'-----stimulates the development of ovarian follicle ?',
  // answers:[
  //   {text:'progesterone', correct:true}, {text:'oestrogen', correct:false}, {text:'prostaglandin', correct:false}, {text:' A and B', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
  // { questions:'what ?',
  // answers:[
  //   {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false}, {text:'', correct:false},
  // ]},
]