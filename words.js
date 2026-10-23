// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "옥정고1",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_2_oj1",      // 학교별 독립 DB 분리 키 (연도_학기_차_학교학년)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디 (기본: admin)
    adminPw: "0112",           // 관리자 비밀번호 (기본: 0000)
    adminName: "책선생",        // 👈 선생님 성함 지정!

    
    // ⚔️ [수호령전 체력 & 시간 & 플레이어 목숨]
    guardianHp1: 5,            // 1회차 수호령 체력 (기본: 5)
    guardianTime1: 7.0,        // 1회차 수호령 시간 (기본: 7.0초)

    guardianHpRepeat: 7,       // 2회차 수호령 체력 (기본: 7)
    guardianTimeRepeat: 5.0,   // 2회차 수호령 시간 (기본: 5.0초)
    guardianPlayerHpRepeat: 3, // 👈 2회차 수호령전 플레이어 하트 수 (기본: 3개)

    // 👑 [마왕전 체력 & 시간 & 플레이어 목숨]
    bossHp1: 12,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 15,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 1,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

    // 🚨 [안개 구출전 일일 쿼터 설정] (일반 단어 계약량에 따라 하루 의무 구출량 배정)
    rescueQuota: [
        { reqWords: 400, quota: 20 }, // 일반 단어 400마리 이상: 하루 20마리
        { reqWords: 240, quota: 15 }, // 일반 단어 240마리 이상: 하루 15마리
        { reqWords: 120, quota: 10 }, // 일반 단어 120마리 이상: 하루 10마리
        { reqWords: 0,   quota: 5  }  // 기본(0마리 이상): 하루 5마리
    ],

    // 🔥 [시험 직전 파이널] 하드코어 마왕전 설정
    hardcoreMode: {
        enabled: true,                       // 켜기(true) / 끄기(false)
        title: "책 선생의 하드코어 점검",            // 시험 명칭
        targetMaps: "all",                   // "all" 또는 ["ch1", "ch2"]
        hp: 10,                              // 출제 문제 수 (마왕 체력)
        playerHp: 1,                         // 👈 하드코어 플레이어 하트 수 (기본: 3개, 1개로 하면 원코인 데스!)
        timeLimit: 3                       // 문제당 제한 시간 (초)
    }
};


// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서

const WORLD_MAPS_TEXT = `

[spell_SH_1: 2학기 수행의 바다]
#철자까지 기억해야하는 수행 단어 정령들.
disability	:	[명] 장애
accessibility	:	[명] 접근성
alternative	:	[형] 대체 가능한, 대안이 되는
ensure	:	[동] 반드시 ~하게 하다, 보장하다
necessarily	:	[부] 어쩔 수 없이, 필연적으로
temporarily	:	[부] 일시적으로
inclusive	:	[형] 포괄적인, 차별 없는
justification	:	[명] 정당화
encounter	:	[동] 마주하다, 접하다
competing	:	[형] 경쟁하는, 서로 대립하는
evaluate	:	[동] 평가하다
homeostasis	:	[명] 항상성, 균형
rebalance	:	[동] 균형을 다시 맞추다
conservation	:	[명] 보존, 보호
establishment	:	[명] 설립
contribute	:	[동] 기여하다, 이바지하다
inspire	:	[동] 영감을 주다, 고무하다
testament	:	[명] 증거, 입증
enduring	:	[형] 오래 지속되는
relevance	:	[명] 관련성, 적절성
significance	:	[명] 의미, 중요성
convey	:	[동] 전달하다, 전하다
transcend	:	[동] 초월하다, 넘어서다
empathize	:	[동] 공감하다
retain	:	[동] 유지하다, 간직하다
reinforce	:	[동] 강화하다
numerous	:	[형] 수많은
recall	:	[동] 기억하다, 회상하다
interconnected	:	[형] 서로 연결된
association	:	[명] 연관, 연결
consciously	:	[부] 의식적으로
adjust	:	[동] 조정하다
circumstance	:	[명] 상황, 환경
yield	:	[동] 산출하다, 결과를 내다
promising	:	[형] 유망한, 가능성이 있는
discomfort	:	[명] 불편함
disadvantage	:	[명] 불리함, 약점
outcome	:	[명] 결과, 성과
depression	:	[명] 우울증
meaningful	:	[형] 의미 있는
interaction	:	[명] 상호작용
corporate	:	[형] 기업의, 회사의
boundary	:	[명] 경계, 한계
clarity	:	[명] 명확성, 맑음
deforestation	:	[명] 삼림 벌채
accomplish	:	[동] 완수하다, 달성하다
approximately	:	[부] 대략
convert	:	[동] 바꾸다, 전환하다
presence	:	[명] 존재, 있음
progressively	:	[부] 점점, 점진적으로
accordingly	:	[부] 따라서
commercial	:	[형] 상업적인
unpredictable	:	[형] 예측 불가능한
spectator	:	[명] 관중
variability	:	[명] 변동성, 다양성
frustrating	:	[형] 좌절감을 주는
overcome	:	[동] 극복하다
systematic	:	[형] 체계적인
element	:	[명] 요소
financial	:	[형] 재정적인
certainty	:	[명] 확실성, 확신
bond	:	[명] 유대, 관계
masterpiece	:	[명] 걸작
dedication	:	[명] 헌신
bother	:	[동] 신경 쓰이게 하다, 괴롭히다
embarrassed	:	[형] 당황한, 부끄러운
confident	:	[형] 자신감 있는, 확신하는
current	:	[형] 현재의, 지금의
resident	:	[명] 거주자
injustice	:	[명] 불평등, 부당함
exclusion	:	[명] 배제
intend	:	[동] 의도하다
degrade	:	[동] 저하시키다
paradox	:	[명] 역설
deliberate	:	[형] 의도적인
assert	:	[동] 주장하다
foundation	:	[명] 토대
eager	:	[형] 열렬한, 간절히 바라는, 열심인
immigrant	:	[명] 이민자
subtle	:	[형] 미묘한
conduct	:	[동] 수행하다, 실행하다
assume	:	[동] 추정하다, 가정하다
contemporary	:	[형] 현대의, 동시대의
undergo	:	[동] 겪다, 경험하다
crucial	:	[형] 결정적인, 매우 중요한
skeptical	:	[형] 회의적인
sustainable	:	[형] 지속가능한
implication	:	[명] 영향, 함의
transparency	:	[명] 투명성
ethical	:	[형] 윤리적인
reveal	:	[동] 드러내다
independent	:	[형] 독립된, 독립적인
stabilize	:	[동] 안정시키다
frequent	:	[형] 잦은, 빈번한
permanent	:	[형] 영구적인, 오래가는
convince	:	[동] 설득하다
matter	:	[동] 중요하다
identical	:	[형] 동일한
hesitate	:	[동] 주저하다
convenience	:	[명] 편의



[CE2_L4: 4과의 숲]
#교과서 4과 단어 정령들. 보듬어줘라.
open ~ up to …	:	[동] ~을 …에게 열어주다
imagine	:	[동] ~을 상상하다, 마음속에 그리다
injure	:	[동] 다치게 하다, 부상 입히다
access	:	[동] (컴퓨터로) ~에 접속하다
right-handed	:	[형] 오른손잡이인
awkward	:	[형] (동작∙행동 등이) 어색한
take time	:	[동] 시간이 걸리다, 시간을 가지다
minor	:	[형] 작은, 사소한
challenge	:	[명] 도전, 과제; [동] 도전하다; [동] 이의를 제기하다
face	:	[명] 얼굴, 면; [동] ~에 직면하다
disability	:	[명] 장애, 불능
nearly	:	[부] 거의
impossible	:	[형] 불가능한
accessibility	:	[명] 접근성, 이용성
practice	:	[명] 연습; [명] 실천, 실행; [동] 연습하다, 실천하다
accessible	:	[형] 접근 가능한, 이용 가능한
common	:	[형] 공통의; [형] 흔한
feature	:	[명] 특징, 특성
description	:	[명] 설명, 묘사
along with ~	:	[전] ~에 덧붙여
include	:	[동] ~을 포함하다
form	:	[명] 형태, 형식; [동] 형성하다
visual	:	[형] 시력의
aloud	:	[부] 큰 소리로
alternative	:	[형] 대안의, 대신의
known as ~	:	[형] ~라고 알려진
brief	:	[형] 간략한
detect	:	[동] ~을 감지하다, 알아채다
ensure	:	[동] ~을 보장하다, 확실하게 하다
transcript	:	[명] (구술된 내용을) 글로 옮긴 기록
caption	:	[명] (텔레비전 등의) 자막
audio	:	[형] 소리의, 음성의
hearing	:	[명] 청각, 청력
offer	:	[동] ~을 제공하다; [명] 제공, 제안
present	:	[동] (정보 등)을 제시하다, 제공하다; [명] 현재; [명] 선물
appear	:	[동] 나타나다, 생기다; [동] ~해 보이다
spoken	:	[형] 구어의
necessarily	:	[부] 필연적으로, 불가피하게, 반드시
elderly	:	[형] 나이가 지긋한, 연로한
poor	:	[형] (환경·상황 등이) 좋지 않은; [형] 가난한
eyesight	:	[명] 시력
background	:	[명] 바탕, 배경
contrast	:	[동] 대조를 이루다; [명] 대조, 대비
as for ~	:	[전] ~에 대해서 말하자면
adjust	:	[동] ~을 조절하다, 맞추다
altogether	:	[부] 완전히, 전적으로
difficulty	:	[명] 장애, 어려움
control	:	[명] 지배(권), 통제(권)
complete	:	[형] 전부의, 완료된; [동] 완수하다, 완료하다
navigation	:	[명] 탐색, 내비게이션
limit	:	[동] ~을 제한하다, 한정하다; [명] 제한, 한계
movement	:	[명] 움직임, 동작; [명] (사회적인) 운동
rely on ~	:	[동] ~에 의존하다, 의지하다
link	:	[명] (웹사이트 등의) 링크; [동] 연결하다
field	:	[명] 운동장, 논, 밭, 영역; [명] (컴퓨터 문서의) 필드, 칸
make use of ~	:	[동] ~을 이용하다
arrow	:	[명] 화살, 화살표
jump	:	[동] 건너뛰다
temporarily	:	[부] 일시적으로
benefit	:	[명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다
kind	:	[명] 종류; [형] 착한, 친절한
indicator	:	[명] 지표
other than ~	:	[전] ~ 외에, ~ 말고
convey	:	[동] (정보∙생각 등)을 전달하다
color blindness	:	[명] 색맹
tell ~ apart	:	[동] ~을 구별하다
difference	:	[명] 차이(점), 다름
dotted	:	[형] 점이 찍힌
solid	:	[명] 고체; [형] 단단한, 굳건한; [형] 죽 이어진, 연속적인
regardless of ~	:	[전] ~에 상관없이
inclusive	:	[형] 차별 없는, 포용적인
culturally	:	[부] 문화적으로
global	:	[형] 세계적인
take ~ into consideration	:	[동] ~을 고려하다
region	:	[명] 지역, 지방
search	:	[명] 검색; [동] 수색하다, 검색하다
setting	:	[명] (기계를 조절하는) 설정
format	:	[명] (컴퓨터 등에 사용되는) 형식, 포맷


[passage_CE_L4: 4과 지문]
# 글을 보며 뜻을 떠올려보는 연습
=== 1. 도입부 ===
[[Imagine | imagine: [동] ~을 상상하다, 마음속에 그리다]] you have fallen down and broken your right arm. There are some things that would be difficult to do with your [[injured | injure: [동] 다치게 하다, 부상 입히다]] arm. For example, you might not be able to carry heavy boxes or ride your bike. What about [[accessing | access: [동] (컴퓨터로) ~에 접속하다]] the Internet? If you are [[right-handed | right-handed: [형] 오른손잡이인]], using a computer mouse or touchscreen with your left hand would be [[awkward | awkward: [형] (동작∙행동 등이) 어색한]] and [[take a lot of time | take time: [동] 시간이 걸리다, 시간을 가지다]].
However, this is a [[minor | minor: [형] 작은, 사소한]] [[challenge | challenge: [명] 도전, 과제; [동] 도전하다; [동] 이의를 제기하다]] compared to what some of us [[face | face: [명] 얼굴, 면; [동] ~에 직면하다]] on the Internet. For people with certain [[disabilities | disability: [명] 장애, 불능]], many websites can be [[nearly | nearly: [부] 거의]] [[impossible | impossible: [형] 불가능한]] to use. This is the reason why web [[accessibility | accessibility: [명] 접근성, 이용성]] is important. Web [[accessibility | accessibility: [명] 접근성, 이용성]] is the [[practice | practice: [명] 연습; [명] 실천, 실행; [동] 연습하다, 실천하다]] of making sure that websites can be used by everyone, [[including | include: [동] ~을 포함하다]] people with [[disabilities | disability: [명] 장애, 불능]]. So what exactly makes a website [[accessible | accessible: [형] 접근 가능한, 이용 가능한]]?
Here are some [[common | common: [형] 공통의; [형] 흔한]] [[features | feature: [명] 특징, 특성]] of [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites.

=== 2. 이미지 텍스트 묘사 ===
*Text [[Descriptions | description: [명] 설명, 묘사]] of Images*
[[Along with | along with ~: [전] ~에 덧붙여]] text, most websites [[include | include: [동] ~을 포함하다]] other [[forms | form: [명] 형태, 형식; [동] 형성하다]] of information, such as images. Sometimes such [[visual | visual: [형] 시력의]] information is important for understanding the text. This is a problem for users with [[visual | visual: [형] 시력의]] [[disabilities | disability: [명] 장애, 불능]]. When they go on a website, they often use programs called “screen readers,” which read online text [[aloud | aloud: [부] 큰 소리로]]. However, these programs cannot “read” images.
[[Accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites solve this problem by providing [[alternative | alternative: [형] 대안의, 대신의]] text, also [[known as | known as ~: [형] ~라고 알려진]] “alt text.” Alt text is a [[brief | brief: [형] 간략한]] [[description | description: [명] 설명, 묘사]] of non-textual information. For instance, if an image shows a group of students, its alt text would explain how many students are in the image and what they are doing. Screen readers can [[detect | detect: [동] ~을 감지하다, 알아채다]] this alt text and read it [[aloud | aloud: [부] 큰 소리로]]. This way, alt text [[ensures | ensure: [동] ~을 보장하다, 확실하게 하다]] that people with [[visual | visual: [형] 시력의]] [[disabilities | disability: [명] 장애, 불능]] can [[access | access: [동] (컴퓨터로) ~에 접속하다]] more of the information on a website.

=== 3. 구술 표기와 자막 ===
*[[Transcripts | transcript: [명] (구술된 내용을) 글로 옮긴 기록]] and [[Captions | caption: [명] (텔레비전 등의) 자막]] for Multimedia Content*
In some cases, [[audio | audio: [형] 소리의, 음성의]] content cannot be [[accessed | access: [동] (컴퓨터로) ~에 접속하다]] or understood. Some people may have [[hearing | hearing: [명] 청각, 청력]] [[disabilities | disability: [명] 장애, 불능]], while others might be in places where they can’t listen to [[audio | audio: [형] 소리의, 음성의]], such as a quiet library. Therefore, [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites often [[offer | offer: [동] ~을 제공하다; [명] 제공, 제안]] other ways to [[access | access: [동] (컴퓨터로) ~에 접속하다]] information that is [[presented | present: [동] (정보 등)을 제시하다, 제공하다; [명] 현재; [명] 선물]] in [[audio | audio: [형] 소리의, 음성의]] [[form | form: [명] 형태, 형식; [동] 형성하다]].
For example, they may provide [[transcripts | transcript: [명] (구술된 내용을) 글로 옮긴 기록]] or [[captions | caption: [명] (텔레비전 등의) 자막]] that can help users [[access | access: [동] (컴퓨터로) ~에 접속하다]] this information. [[Transcripts | transcript: [명] (구술된 내용을) 글로 옮긴 기록]] are text versions of the entire [[audio | audio: [형] 소리의, 음성의]] content, while [[captions | caption: [명] (텔레비전 등의) 자막]] are text versions of the [[audio | audio: [형] 소리의, 음성의]] that [[appear | appear: [동] 나타나다, 생기다; [동] ~해 보이다]] in a video as it plays. [[Captions | caption: [명] (텔레비전 등의) 자막]] [[include | include: [동] ~을 포함하다]] not only the text version of the [[spoken | spoken: [형] 구어의]] words but also [[descriptions | description: [명] 설명, 묘사]] of the music and other sounds in the video.

=== 4. 보고 듣기 쉬운 컨텐츠 ===
*[[Content: [명] 컨텐츠; [명] 함유물, 함량; [형] 만족하는]] That Is Easy to See and Hear*
Having a [[visual | visual: [형] 시력의]] [[disability | disability: [명] 장애, 불능]] doesn’t [[necessarily | necessarily: [부] 필연적으로, 불가피하게, 반드시]] mean a person can’t see at all. Some people, [[including | include: [동] ~을 포함하다]] many [[elderly | elderly: [형] 나이가 지긋한, 연로한]] people, simply have [[poor | poor: [형] (환경·상황 등이) 좋지 않은; [형] 가난한]] [[eyesight | eyesight: [명] 시력]]. This makes it difficult for them to read. For this reason, [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites have a [[background | background: [명] 바탕, 배경]] color that [[contrasts | contrast: [동] 대조를 이루다; [명] 대조, 대비]] with the color of their text. This makes the text clear enough for most people to see.
[[As for | as for ~: [전] ~에 대해서 말하자면]] [[audio | audio: [형] 소리의, 음성의]] content, [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites allow users to [[adjust | adjust: [동] ~을 조절하다, 맞추다]] the volume of [[background | background: [명] 바탕, 배경]] sound or to turn it off [[altogether | altogether: [부] 완전히, 전적으로]]. This gives users both with and without [[hearing | hearing: [명] 청각, 청력]] [[difficulties | difficulty: [명] 장애, 어려움]] more [[control | control: [명] 지배(권), 통제(권)]] over their experience while they are using the sites.

=== 5. 완전한 키보드 탐색 ===
*[[Complete | complete: [형] 전부의, 완료된; [동] 완수하다, 완료하다]] [[Navigation | navigation: [명] 탐색, 내비게이션]] Using the Keyboard*
Some users have [[disabilities | disability: [명] 장애, 불능]] that [[limit | limit: [동] ~을 제한하다, 한정하다; [명] 제한, 한계]] the [[movement | movement: [명] 움직임, 동작; [명] (사회적인) 운동]] of their hands. They [[rely on | rely on ~: [동] ~에 의존하다, 의지하다]] their keyboards, rather than a mouse, to navigate websites. On [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites, users can [[access | access: [동] (컴퓨터로) ~에 접속하다]] everything on the site using only a keyboard. This means that [[links | link: [명] (웹사이트 등의) 링크; [동] 연결하다]], buttons, and [[fields | field: [명] 운동장, 논, 밭, 영역; [명] (컴퓨터 문서의) 필드, 칸]], which are spaces where information is entered, can be [[accessed | access: [동] (컴퓨터로) ~에 접속하다]] through keyboard [[navigation | navigation: [명] 탐색, 내비게이션]]. Users navigate the websites by [[making use of | make use of ~: [동] ~을 이용하다]] keys such as the space bar, the [[arrow | arrow: [명] 화살, 화살표]] keys, the enter key, and the tab key. For example, they can use the tab key to [[jump | jump: [동] 건너뛰다]] from one part of a web page to another. Both users with [[disabilities | disability: [명] 장애, 불능]] and those with [[temporarily | temporarily: [부] 일시적으로]] [[injured | injure: [동] 다치게 하다, 부상 입히다]] hands can [[benefit | benefit: [명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다]] from this [[kind | kind: [명] 종류; [형] 착한, 친절한]] of [[navigation | navigation: [명] 탐색, 내비게이션]].

=== 6. 색상 이외의 지표 ===
*[[Indicators | indicator: [명] 지표]] [[Other than | other than ~: [전] ~ 외에, ~ 말고]] Color That [[Convey | convey: [동] (정보∙생각 등)을 전달하다]] Information*
[[Color blindness | color blindness: [명] 색맹]] is a [[common | common: [형] 공통의; [형] 흔한]] [[visual | visual: [형] 시력의]] [[disability | disability: [명] 장애, 불능]]. People with [[color blindness | color blindness: [명] 색맹]] find it difficult to [[tell | tell ~ apart: [동] ~을 구별하다]] some colors [[apart | tell ~ apart: [동] ~을 구별하다]]. This can cause problems, especially when graphs and charts only use colors to show the [[differences | difference: [명] 차이(점), 다름]] between sets of information. [[Accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites use other [[indicators | indicator: [명] 지표]] [[along with | along with ~: [전] ~에 덧붙여]] the colors. For example, a line in green may also be [[dotted | dotted: [형] 점이 찍힌]], while a line in blue is [[solid | solid: [명] 고체; [형] 단단한, 굳건한; [형] 죽 이어진, 연속적인]]. This [[ensures | ensure: [동] ~을 보장하다, 확실하게 하다]] that everyone can [[tell the two lines apart | tell ~ apart: [동] ~을 구별하다]].

=== 7. 마무리 ===
The [[accessibility | accessibility: [명] 접근성, 이용성]] [[features | feature: [명] 특징, 특성]] of websites don’t just help people with [[disabilities | disability: [명] 장애, 불능]]. They can make online experiences easier for everyone, [[regardless of | regardless of ~: [전] ~에 상관없이]] abilities or situations. When websites are easy to navigate and understand, we can all [[benefit | benefit: [명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다]] from a more [[inclusive | inclusive: [형] 차별 없는, 포용적인]] online experience.

=== 8. 컬쳐노트 ===
*Culture Notes - Making the Web More [[Culturally | culturally: [부] 문화적으로]] [[Accessible | accessible: [형] 접근 가능한, 이용 가능한]]*
Reading and writing systems are different across cultures. People from Western cultures read and write from left to right, while those from some Middle Eastern cultures read and write from right to left. People from some Eastern cultures, like that of Japan, read and write from top to bottom. Some [[global | global: [형] 세계적인]] websites [[take | take ~ into consideration: [동] ~을 고려하다]] these differences [[into consideration | take ~ into consideration: [동] ~을 고려하다]] and [[adjust | adjust: [동] ~을 조절하다, 맞추다]] their websites for people in different [[regions | region: [명] 지역, 지방]]. In countries where text is read from right to left, the website’s [[search | search: [명] 검색; [동] 수색하다, 검색하다]] button is on the left and the logo is on the right. If you visit the same websites in a different language [[setting | setting: [명] (기계를 조절하는) 설정]], you will see a different [[format | format: [명] (컴퓨터 등에 사용되는) 형식, 포맷]].

`;
