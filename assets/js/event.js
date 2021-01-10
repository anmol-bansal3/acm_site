var event_array = document.querySelectorAll('.event_tag');

const data_2015 = [
    {
        name: 'ETHICAL HACKING WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'INDUSTRIAL VISIT',
        images : './assets/2015/2015_1_0.jpg'
    },
    {
        name: 'CS COACH',
        images : './assets/2015/2015_2_0.jpg'
    },
    {
        name: 'CODE PIRATES SEASON-3',
        images : './assets/2015/2015_3_0.jpg'
    },
    {
        name: 'INTERACTION SESSION',
        images : './assets/2015/2015_4_1.jpeg'
    },
    {
        name: 'CODE PIRATES SEASON-2',
        images : './assets/2015/2015_5_0.jpg'
    },
    {
        name: 'WORKSHOP ON COMPUTING CURRICULA',
        images : './assets/2015/2015_6_1.jpg'
    }
]

const data_2016 = [
    {
        name: 'HOUR OF CODE',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CODE MANIC',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'ACM SUMMIT',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'INDUSTRIAL VISIT',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'WEB PLAYERS',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CREATING ART WITH ILLUSTRATOR',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'HOSTEL ACTIVITY',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'HACKATHON FOR WOMEN',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'EVENT ON SWACH BHARAT',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'WORKSHOP ON HYBRID APP DEVELOPMENT USING IONIC',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CS PATHSHALA',
        images : './assets/2015/2015_0_0.jpg'
    }, 
]
const data_2017 = [
    {
        name: 'ACM-W HACKATHON 2017',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'NODE JS WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CONJECTURE 2017',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CS PATHSHALA',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CS CURRICULA WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'TECHNOVATION 2017',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'AARDA 2017',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'ALUMNI TALK',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'NOUGHTS & CROXES',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'INDUSTRIAL VISIT',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'MEETING WITH MR. CHANDRA SHEKHAR',
        images :  './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'CODATHON',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'DSP TALK 2017',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    {
        name: 'ENIGMA',
        images : './assets/2015/2015_0_0.jpg'
    }, 
    
]
const data_2018 = [
    {
        name: 'MENTAL WELL BEING',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'COMPUTE 2018',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'AWS WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'EXPERT TALK ON CYBER SECURITY',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'FDP ON PROGRAMMING & LOGIC BUILDING',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'EVENING CLASSES ON APP DEVELOPMENT',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'INDUSTRIAL VISIT TO NITTTR, CHANDIGARH',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'CODATHON',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'SPEAK TO LEAD',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'HONORABLE MENTION CHAPTER AWARD',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'MOBILE DEVELOPER DAY',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'CLASH OF GEEKS',
        images : './assets/2015/2015_0_0.jpg'
    },
]
const data_2019 = [
    {
        name: 'EXPERT TALK ON DATA SCIENCE',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'NODE JS WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'REACT JS WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'WEBOMANIA',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'WORKSHOP ON ANDROID WITH MACHINE LEARNING',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'EXPERT TALK ON BIG DATA AND HADOOP',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'HACKON WORKSHOP',
        images : './assets/2015/2015_0_0.jpg'
    },
    {
        name: 'CODATHON',
        images : './assets/2015/2015_0_0.jpg'
    },
    
]

const data_2020 = [
    {
        name: 'DSP TALK',
        images : './assets/2020/2020_0_0.jpg'
    },
    {
        name: 'HOUR OF CODE',
        images : './assets/2020/2020_1_0.jpg'
    },
    {
        name: 'CODE INOVATION SERIES',
        images : './assets/2020/2020_1_0.jpg'
    },
    {
        name: 'GITHUB HANDS-ON WORKSHOP',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'WORKSHOP ON VEDIC MATHEMATICS',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'TREE PLANTATION DRIVE',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'FLIP IT(OCTOBER)',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'IDEATION CHALLENGE 2020',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'MENTAL HEALTH AWARENESS',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'COVID AWARENESS AND DONATION CAMP',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'FLIP IT(AUGUST)',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'DEFENSIBLE SECURITY ARCHITECTURE',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'TECHWEEK 2020',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'POSTER MAKING COMPETITION',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'WEBINAR ON DIGITAL ANALYTICS ASPECTS',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'WEDNESDAY WISDOM INDUSTRY SERIES',
        images : [
            './assets/2020/2020_1_0.jpg'
        ]
    },
    {
        name: 'EXPERT TALK ON AI',
        images : './assets/2020/2020_1_0.jpg'
    },
    {
        name: 'CODATHON 2020',
        images : './assets/2020/2020_1_0.jpg'
    },
    {
        name: 'EXPERT TALK ON CYBER CRIME',
        images : './assets/2020/2020_1_0.jpg'
    },
    {
        name: 'WORKSHOP ON DJANGO',
        images : './assets/2020/2020_1_0.jpg'
    },
]



event_array.forEach( event =>{
    let data_year = event.getAttribute('data-year');
    let tmp = event.getAttribute('href').split('?')[1];
    tmp = tmp.split('=').join('&').split('&');
    let year = tmp[3]
    if(data_year == 2020){
        event.innerHTML = data_2020[year].name;
    }
    if(data_year == 2019){
        event.innerHTML = data_2019[year].name;
    }
    if(data_year == 2018){
        event.innerHTML = data_2018[year].name;
    }
    if(data_year == 2017){
        event.innerHTML = data_2017[year].name;
    }
    if(data_year == 2016){
        event.innerHTML = data_2016[year].name;
    }
    if(data_year == 2015){
        event.innerHTML = data_2015[year].name;
    }

});