const correctAnswers = ["트루먼 쇼", "기생충", "위플래쉬", "인터스텔라", "컨택트", "쇼생크 탈출", "에이리언", "포레스트 검프", "이터널 선샤인", "라라랜드", "타이타닉", "쥬라기 공원", "라이언 일병 구하기", "글래디에이터", "인셉션", "센과 치히로의 행방불명", "노인을 위한 나라는 없다", "월-E", "올드보이", "인사이드 아웃", "다크 나이트", "라따뚜이", "니모를 찾아서", "월레스와 그로밋 - 복수의 날개", "스타워즈", "죠스", "성난황소", "타인의 삶", "괴물", "아바타", "레미제라블", "위대한 쇼맨", "조커", "블랙팬서", "테넷", "E.T.", "이웃집 토토로", "매트릭스", "어바웃 타임", "곤지암", "극한직업", "베테랑", "7번방의 선물", "암살", "범죄도시", "택시운전사", "부산행", "해운대", "엑시트", "너의 이름은."];
const hints = {
    0 : "한 남자가 자신도 모르게 스튜디오 속 자신의 인생이 전세계에 방영되고 있는 남자를 그린 1998년 SF 영화",
    1 : "국내에서 26번째로 천만 관객을 돌파한 봉준호의 일곱 번째 장편 작품인 2019년 블랙 코미디 서스펜스 영화",
    2 : "완벽주의 음악 교수와 재즈 뮤지션 학생 앤드류 사이의 갈등을 그린 2014년 음악 영화",
    3 : "인류 멸망이 가까워진 미래에 우주비행사들의 우주 너머에서 새로운 거주 행성을 찾는 모험을 그린 2014년 SF 영화",
    4 : "어느날 지구에 나타난 의문의 존재와 최고의 언어학자의 소통 속에서 일어나는 혼란을 그린 2016년 SF 영화",
    5 : "아내 살해 혐의로 종신형을 선고받고 악명 높은 교도소 쇼생크에 들어가 비공식 회계사가 된 한 남자를 그린 1994년 사회/범죄 영화",
    6 : "항해 중의 대형 우주선이라는 폐쇄 공간 안에서 공격적인 외계생물에게 습격당하는 승무원의 공포와 갈등을 그린 1979년 SF/공포 영화",
    7 : "놀라운 사건들을 겪으면서도 긍정적으로 주변에 희망과 용기를 전하는 마음 따뜻한 한 남자의 이야기를 그린 1994년 드라마틱 코미디 영화",
    8 : "옛 여자친구가 자신을 잊기 위한 실험적 치료 참여 사실을 알게 되고 자신도 같은 치료를 받는 한 남자의 이야기를 그린 2004년 로맨스 영화",
    9 : "배우 지망생과 재즈 피아니스트의 꿈과 사랑 사이의 딜레마를 그린 2016년 로맨스 영화",
    10 : "실화 배 침몰 사고를 배경으로 배 속에서 펼쳐지는 가상의 이야기를 그린 1997년 로맨스 영화",
    11 : "첨단 기술로 유전자 복제 공룡 공원에서 공룡들의 탈출로 벌어지는 생존극을 그린 1993년 SF 영화",
    12 : "상륙작전 이후 특수 임무에 투입된 공수부대원을 구출하기 위한 침투작전을 그린 1998년 전쟁 영화",
    13 : "로마 황제의 별세 후 왕위 계승자로 지목된 장군과 황제의 아들 사이의 목숨을 건 경쟁을 그린 2000년 고전 액션 영화",
    14 : "타인의 꿈을 통해 비밀을 캐는 능력을 이용해 한 기업 상속자의 무의식으로 기업을 분할시키는 임무를 받은 요원을 그린 2010년 액션 영화",
    15 : "거역하면 동물로 바꿔버리는 마녀가 지배하는 기묘한 세계에 발을 들여놓는 열 살 소녀를 그린 2001년 지브리의 가족 영화",
    16 : "불발된 마약 거래로 거액의 돈가방을 챙긴 사냥꾼과 보안관, 살인 청부업자의 텍사스 사막에서의 사투를 그린 2007년 스릴러 영화",
    17 : "텅 빈 지구에서 홀로 일만 하던 로봇이 탐사로봇 이브를 만나면서 우주에서 펼쳐지는 모험을 그린 2008년 픽사의 SF/가족 영화",
    18 : "영문도 모른 채 감금됐던 남자가 15년 만에 풀려나 가둔 사람을 추적하는 5일간의 복수를 그린 2003년 미스터리/액션 영화",
    19 : "모든 사람의 머릿속에 존재하는 다섯 감정들과 주인공 ‘라일리’의 성장, 그 사이의 감정적 서사를 그린 2015년 픽사의 성장 영화",
    20 : "고담시 최악의 범죄자 조커와 그에 맞서 싸우는 배트맨의 이야기를 그린 2008년 DC의 슈퍼히어로/범죄 영화",
    21 : "절대 미각 생쥐 레미와 요리 견습생 링귀니의 파리 최고의 레스토랑에서의 이야기를 그린 2007년 픽사의 코미디/가족 영화",
    22 : "'니모'의 아버지와 '도리'가 한 치과에 갇힌 어린 흰동가리 니모를 구출하는 대장정을 그린 2003년 픽사의 어드벤쳐/가족 영화",
    23 : "한 범죄자가 월레스가 발명한 난쟁이 로봇으로 웨스트왈라비가에 일대에 일으키는 혼란을 그린 2025년 아드만의 코미디/범죄 영화",
    24 : "'루크'가 납치된 공주의 조난 신호를 받고 우주의 악의 제국에게서 공주를 구출하는 이야기를 그린 1977년 스카이 오페라 영화",
    25 : "거대 백상어가 섬을 위협하자 상어 사냥꾼이 백상어를 잡기 위한 과정을 그린 1975년 스티븐 스필버그의 재난/공포 영화",
    26 : "과거를 잊고 조용히 살던 동철의 아내가 납치되고 협박을 받자 벌어지는 동철의 폭주를 그린 2018년 액션 영화",
    27 : "베를린 장벽 붕괴 5년 전, 비밀경찰 비즐러의 유명 극작가와 인기배우를 감시하는 중대 임무를 그린 2006년 드라마틱 영화",
    28 : "폐기된 독성 화학물질로 탄생한 돌연변이 괴물이 딸을 데려가고 시작되는 주인공의 이야기를 그린 2006년 봉준호의 SF/호러 영화",
    29 : "자신의 주변 사람들과 새로운 고향이 된 판도라 세계를 지키기 위해 펼치는 거대한 싸움을 그린 2009년 제임스 카메론의 밀리터리/SF 영화",
    30 : "19세기 프랑스, 과거에 도둑이었던 남자의 새인생 속 다시 마주하게 되는 과거에 대한 이야기를 그린 2012년 드라마틱 뮤지컬 영화",
    31 : "한 남자가 가난했던 어린 시절을 극복하고 펼치는 쇼를 그린, P.T. 바넘의 생애에서 영감을 얻은 2017년 뮤지컬 영화",
    32 : "정신병자 코미디언 지망생이 대중의 관심을 얻으려다가 받는 공격으로 처참해지는 그의 삶을 그린 2019년 DC의 범죄/느와르 영화",
    33 : "희귀 금속 ‘비브라늄’과 왕좌를 노리는 자들의 음모로부터 세상을 구할 히어로 ‘블랙 팬서’의 탄생을 그린 2018년 마블의 슈퍼 히어로 영화",
    34 : "정체불명의 무기를 되찾고 세상의 파괴를 막기 위해 시간 전쟁을 멈추려는 비밀 요원을 그린 2020년 크리스토퍼 놀란의 SF/액션 영화",
    35 : "지구에서 표본 채취 중 고립되어 한 가정집의 아이들에게 부모 몰래 돌봐지는 한 외계인를 그린 1982년 스티븐 스필버그의 SF/가족 영화",
    36 : "엄마의 입원으로 아빠와 함께 일본의 한 시골 마을에서 여름을 보내게 된 두 어린 자매가 겪는 이야기를 그린 1988년 지브리의 가족 영화",
    37 : "낮에는 회사원, 밤에는 해커인 주인공이 가상 현실의 인큐베이터 속 인간들을 위해 기계에 맞서는 이야기를 그린 1999년 SF/액션 영화",
    38 : "집안의 남자에게 시간 역행 능력이 있다는 것을 알게 된 청년의 첫눈에 반한 여인의 마음을 얻기 위한 과정을 그린 2013년 로맨스 영화",
    39 : "환자의 집단 자살과 병원장 실종으로 버려진 정신병원에 들어가는 7명의 사람의 이야기를 그린 2018년 공포영화",
    40 : "범죄 조직 감시를 위해 위장 창업한 치킨집이 유명해져, 낮에는 치킨, 밤에는 잠복을 해야하는 형사들을 그린 2019년 코미디/액션 영화",
    41 : "베테랑 형사와 돈으로 죄를 덮으려는 재벌 3세의 대결을 그린 2015년 코미디 액션 영화",
    42 : "흉악범들의 7번 방에 들어온 용구의 사연을 접한 동료들의 용구 딸 밀반입 작전을 그린 2013년 드라마틱 코미디 영화",
    43 : "일제 치하의 1930년대에 대한민국 임시 정부의 밀명으로 시작된 세 사람의 친일파 피살 작전을 그린 2015년 시대물 액션 영화",
    44 : "괴물 형사와 반장이 이끄는 강력반의 전국을 뒤흔든 조폭 일당을 잡을 '조폭소탕작전'을 그린 2017년 범죄 액션 영화",
    45 : "택시기사 만섭과 뒷좌석의 독일 기자의 광주에서의 이야기, 광주민주화운동 당시 실화를 바탕으로 한 2017년 시대물 가족 영화",
    46 : "좀비 바이러스로 유일하게 안전한 도시로 가기 위해 딸과 함께 열차에 몸을 실은 주인공을 그린 2016년 좀비 아포칼립스 영화",
    47 : "지질학자의 쓰나미 경고를 무시하는 당국으로 남은 시간은 단 10분인 상황의 주인공들을 그린 2009년 재난 영화",
    48 : "도시 한복판에 유출된 독가스 아수라장 속에서 탈출하는 대학 시절 산악부 두 청년를 그린 2019년 코미디 재난 영화",
    49 : "서로의 영혼이 반복적으로 바뀌도록 특별하게 이어져 있는 도쿄의 남주와 시골의 여주의 이야기를 그린 2016년 애니메이션 로맨스 영화"
};
let done = [];

let cnt = 0;
let correct = 0;
const hint = document.getElementById("hint");
const progress = document.getElementById("progress");
const img = document.getElementById("poster");
const light = document.getElementById("light");
let visible = true;
let resultOn = true;
let quizNumber = Math.floor(Math.random() * correctAnswers.length);
hint.textContent = hints[quizNumber];
progress.textContent = `${cnt + 1}/10`;
img.src = "img/공백.svg";
done.push(quizNumber);

setInterval(() => {
    light.style.opacity = visible ? '0.25' : '1';
    visible = !visible;
    console.log(light.style.opacity);
}, 2000)

function hideResult() {
    resultOn = false;
    setTimeout(() => {
        result.style.transition = 'all 1s';
        result.style.opacity = '0';
        setTimeout(() => {
            result.style.transition = 'all 0s';
            if (cnt < 9) result.textContent = "";
            result.style.opacity = '1';
            resultOn = true;
        }, 2000);
    }, 1000);
}

function check() {
    const inputAnswer = document.getElementById("answer");
    const result = document.getElementById("result");

    if (resultOn) {
        if (inputAnswer.value.replaceAll(" ", "") != "") {
            img.src = `img/${correctAnswers[quizNumber]}.webp`;
            if (correctAnswers[quizNumber].replaceAll(" ", "").replaceAll("-", "").replaceAll(".", "") == inputAnswer.value.replaceAll(" ", "").replaceAll("-", "").replaceAll(".", "")) {
                result.style.color = "green";
                result.innerHTML = `O 정답입니다!<br>정답 : ${correctAnswers[quizNumber]}`;
                correct++;
                hideResult();
            }
            else {
                result.style.color = "red";
                result.innerHTML = `X 오답입니다..<br>정답 : ${correctAnswers[quizNumber]}`;
                hideResult();
            }
            answer.readOnly = true;
            setTimeout(() => set(), 2000);
        }
        else {
            result.style.color = "black";
            result.textContent = "정답을 입력해주세요";
            hideResult();
        }
    }
}

function set() {
    const inputAnswer = document.getElementById("answer");
    const result = document.getElementById("result");
    inputAnswer.focus();
    answer.readOnly = false;

    if (cnt < 9) {
        if (inputAnswer.value != "") {
            inputAnswer.value = "";
            result.textContent = "";
            img.src = "img/공백.svg";

            cnt++;

            while (done.includes(quizNumber)) {
                quizNumber = Math.floor(Math.random() * correctAnswers.length);
            }
            done.push(quizNumber);

            hint.textContent = hints[quizNumber];
            progress.textContent = `${cnt + 1}/10`;
        }
        else {
            result.style.color = "black";
            result.textContent = "정답을 입력해주세요";
            hideResult();
        }
    }
    else {
        end.style.display = "inline";
        answer.readOnly = true;
        result.style.transition = "all 0s";
        result.style.opacity = '1';
        result.style.color = "black";
        result.textContent = `10개 중에 ${correct}개 맞히셨습니다.`;
    }
}

function focus() {
    answer.focus();
}