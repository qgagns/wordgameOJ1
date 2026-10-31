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
    bossHp1: 20,               // 1회차 마왕 체력 (기본: 10)
    bossTime1: 4.0,            // 1회차 마왕 시간 (기본: 5.0초)

    bossHpRepeat: 20,          // 2회차 마왕 체력 (기본: 12)
    bossTimeRepeat: 3.0,       // 2회차 마왕 시간 (기본: 4.0초)
    bossPlayerHpRepeat: 2,     // 👈 2회차 마왕전 플레이어 하트 수 (기본: 3개)

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
imagine	:	[동] 상상하다, 마음속에 그리다
injure	:	[동] 다치게 하다, 부상 입히다
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
accessible	:	[형] 접근 가능한, 이용 가능한
common	:	[형] 공통의; [형] 흔한
description	:	[명] 설명, 묘사
include	:	[동] 포함하다
form	:	[명] 형태, 형식; [동] 형성하다
visual	:	[형] 시각적인, 시력의
aloud	:	[부] 큰 소리로
alternative	:	[형] 대안의, 대신의
known as ~	:	[형] ~라고 알려진
brief	:	[형] 간략한
detect	:	[동] 감지하다, 알아채다
ensure	:	[동] 보장하다, 확실하게 하다
transcript	:	[명] (구술된 내용을) 글로 옮긴 기록
caption	:	[명] (텔레비전 등의) 자막
audio	:	[형] 소리의, 음성의
hearing	:	[명] 청각, 청력
offer	:	[동] 제공하다, 제안하다; [명] 제공, 제안
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
adjust	:	[동] 조절하다, 맞추다
altogether	:	[부] 완전히, 전적으로
difficulty	:	[명] 장애, 어려움
control	:	[명] 지배(권), 통제(권)
complete	:	[형] 전부의, 완료된; [동] 완수하다, 완료하다
navigation	:	[명] 탐색, 내비게이션
limit	:	[동] 제한하다, 한정하다; [명] 제한, 한계
movement	:	[명] 움직임, 동작; [명] (사회적인) 운동
rely on ~	:	[동] ~에 의존하다, 의지하다
link	:	[명] (웹사이트 등의) 링크; [동] 연결하다
field	:	[명] 운동장, 논, 밭, 영역; [명] (컴퓨터 문서의) 필드, 칸
make use of ~	:	[동] 이용하다, 활용하다
arrow	:	[명] 화살, 화살표
jump	:	[동] 건너뛰다
temporarily	:	[부] 일시적으로
benefit	:	[명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다
kind	:	[명] 종류; [형] 착한, 친절한
indicator	:	[명] 지표
other than ~	:	[전] ~ 외에, ~ 말고
convey	:	[동] (정보∙생각 등)을 전달하다
color blindness	:	[명] 색맹
tell ~ apart	:	[동] 구별하다
difference	:	[명] 차이(점), 다름
dotted	:	[형] 점이 찍힌
solid	:	[명] 고체; [형] 단단한, 굳건한; [형] 죽 이어진, 연속적인
regardless of ~	:	[전] ~에 상관없이
inclusive	:	[형] 차별 없는, 포용적인
culturally	:	[부] 문화적으로
global	:	[형] 세계적인
take ~ into consideration	:	[동] 고려하다, 고려사항에 넣다
region	:	[명] 지역, 지방
search	:	[명] 검색; [동] 수색하다, 검색하다
setting	:	[명] (기계를 조절하는) 설정
format	:	[명] (컴퓨터 등에 사용되는) 형식, 포맷


[mg_oj1_1: 모고 단어 1]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
access: [명] 접근, 출입, 이용; [명] 접근하다, 이용하다, 접속하다
afford toR: [동] ~할 여유가 있다
area: [명] 지역, 영역
attractiveness: [명] 매력
by contrast: [부] 대조적으로
community: [명] 공동체, 지역 사회
cost: [명] 비용
create: [동] ~을 창조하다, ~을 만들다
creation: [명] 창조, 조성; [명] 창조물
currently: [부] 현재, 최근에
degrade: [동] ~의 질을 떨어뜨리다, 저해하다
desirable: [형] 가치 있는, 바람직한
displacement: [명] 퇴거
ecosystem: [명] 생태계
environmental: [형] 환경의, 환경적인
ethnic: [형] 민족의
exclusion: [명] 제외, 배제
high-quality: [형] 고급의
household: [명] 가정, 가구
housing: [명] 주거
improve: [동] 개선하다, 향상시키다
improvement: [명] 개선
in turn: [부] 결국
increase: [명] 증가, 상승; [동] 증가하다, 늘다
infrastructure: [명] 사회 기반 시설
injustice: [명] 불평등
intend: [동] ~을 의도하다
low: [형] 낮은
low-income: [형] 저소득의
neighbourhood: [명] 지역
paradox: [명] 역설
project: [동] 투사하다, 투영하다; [명] 계획, 프로젝트
promote: [동] 홍보하다, 촉진하다; [동] 승진시키다
provide: [동] 제공하다
regeneration: [명] 재생
rent: [명] 임대료
resident: [명] 거주자
result in ~: [동] 야기하다, 초래하다
rise: [동] 오르다, 상승하다; [명] 상승, 도래, 부상
similar (to ~): [형] (~와) 비슷한, 유사한
solve: [동] 해결하다
space: [명] 공간; [명] 우주
urban: [형] 도시의
wellbeing: [명] 복지, 행복
a little: [부] 다소
a minority of ~: [형] 소수의 ~
absorb: [동] 흡수하다
across: [전] ~에 걸쳐
adopt: [동] 채택하다, 도입하다; [동] 입양하다
arrive: [동] 도착하다
assert: [동] 주장하다
attract: [동] 끌어들이다, 유치하다
chosen for ~: [형] ~로 선택된
claim: [명] 주장, [동] 주장하다; [명] 권리; [동] (목숨 등을) 앗아가다
complain: [동] 불평하다
comprised of ~: [형] ~로 구성된
continent: [명] 대륙
cultural: [형] 문화의, 문화적인
deliberate: [형] 의도적인, 고의적인; [형] 신중한
describe: [동] 묘사하다, 설명하다
direction: [명] 방향
eagerly: [부] 열렬히, 열심히
empire: [명] 제국
expand: [동] 확장되다
flood: [명] 홍수; [동] 몰려들다, 밀려들다
foundation: [명] 토대, 기반; [명] 설립
from the start: [부] 처음부터
generation: [명] 세대; [명] 생성, 발생
historian: [명] 역사학자
hold that ~: [동] ~라고 여기다, ~라고 생각하다
immigrant: [명] 이민자

[mg_oj1_2: 모고 단어 2]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
incoming: [형] 유입되는, 들어오는
influence: [명] 영향; [동] ~에 영향을 미치다
initial: [형] 초기의
later: [형][부] 이후의, 이후에
lay (down): [동] 놓다, 두다; [동] (규칙 등을) 정하다, 내려놓다
legendary: [형] 전설적인
melting pot: [명] 용광로
merit: [명] 장점, 공로
multicultural: [형] 다문화적인
nondiscrimination: [명] 무차별, 비차별
openness: [명] 개방성, 개방적 태도
original: [형] 원래의
perhaps: [부] 아마도
poet: [명] 시인
policy: [명] 정책
population: [명] 인구
rapid: [형] 급격한, 빠른
rate: [명] 비율, 요율; [명] 속도
Roman-born: [형] 로마 태생인
said toR: [형] ~라고 일컬어지는
strength: [명] 힘, 기운; [명] 장점
success: [명] 성공
throne: [명] 왕위, 왕좌
tradition: [명] 전통
virtue: [명] 미덕, 덕목
able toR: [형] ~할 수 있는
allow ~ toR: [동] 허락하다, 할 수 있게 하다
attend: [동] (학교 등에) 다니다, 참석하다; [동] (to) 주의를 기울이다, 처리하다
because of ~: [전] ~ 때문에
bill: [명] 법안; [명] 지폐; [명] 계산서
citizen: [명] 시민
citizenship: [명] 시민권, 시민 의식
congress: [명] 의회
develop: [동] 개발하다, 발전시키다; [동] 현상하다; [동] 발병하다
doctoral degree: [명] 박사 학위
earn: [동] 받다, 벌다; [동] 가져다주다, 벌어다주다
elect ~ to ...: [동] ~을 ...으로 선출하다
farm: [명] 농장; [동] 농사를 짓다
graduate: [동] (from) 졸업하다; [형] 대학원의, 석사 과정의
graduate school: [명] 대학원
Indian-born: [형] 인도에서 태어난, 인도계의
interest: [명] 관심, 흥미; [명] 이자, 이득; [동] 관심을 끌다
nationality: [명] 국적
pass: [동] 통과시키다; [동] 지나가다; [동] 건네주다
political: [형] 정치적인, 정치와 관련된
politician: [명] 정치인
politics: [명] 정치, 정치학
receive: [동] 받다, 수령하다
speak out on ~: [동] ~에 대해 공개적으로 말하다
topic: [명] 주제, 토픽
without: [전] ~ 없이
assume: [동] 추정하다, 가정하다
available: [형] 이용 가능한, 이용할 수 있는
choose ~ over ...: [동] ...보다 ~을 선택하다
complicated: [형] 복잡한
conduct: [동] 수행/시행하다; [동] 전도하다; [동] 지휘하다
contemporary: [형] 현대의
diet: [명] 식단
dietary: [형] 식이 요법의
effectively: [부] 효과적으로; [부] 사실상, 실질적으로
especially: [부] 특히
evolve: [동] 진화하다, 서서히 발전하다
experiment: [명] 실험; [동] 실험하다
far: [형][부] 먼, 멀리; [부] 훨씬
fare: [동] 살아가다
fatty: [형] 지방이 많은
fit: [동] (in/to/into ~) 알맞다, 적합하다
generally: [부] 일반적으로
highly: [부] 매우, 상당히
honey: [명] 꿀
humility: [명] 겸손
lean: [형] 기름기가 없는[적은], 호리호리한; [동] 기대다, 기울다

[mg_oj1_3: 모고 단어 3]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
make the most of ~: [동] ~을 최대한 이용하다
millennium / millennia: [명] 천 년
neatly: [부] 깔끔하게
nutrition: [명] 영양 (섭취)
nutritional science: [명] 영양학
otherwise: [부] 그렇지 않으면, 그와 달리, 다르게
ought toR: [동] ~해야 한다
poorly: [부] 형편없이
preferable (to ~): [형] (~보다) 선호되는
probably: [부] 아마도
process: [명] 과정; [동] 처리하다, 가공하다
prove: [동] 증명하다
question: [동] ~에 대해 의문을 제기하다
reason: [명] 이유; [동] 추론하다, 사고하다
resource: [명] 자원
sausage: [명] 소시지
society: [명] 사회
spoonful: [명] 한 숟가락
sprinkle: [명] 소량; [동] 뿌리다
subtle: [형] 미묘한
superior to ~: [형] ~보다 우수한, 더 나은
sweetener: [명] 감미료
traditional: [형] 전통적인
transition: [명] 전환, 이행
undergo: [동] 겪다
witness: [동] 목격하다; [명] 증인, 목격자
young: [형] 어린, 신생의; [명] 새끼
accountability: [명] 책임
attract one's attention: [동] ~의 관심을 끌다
bank with ~: [동] ~와 거래하다
belief: [명] 믿음, 신념
care about ~: [동] ~에 관심을 가지다, ~에 신경을 쓰다
clearly: [부] 분명히, 명확히
committed to ~: [형] ~에 전념하는, 헌신하는
communicate: [동] 전달하다, 소통하다
convenience: [명] 편리함, 편의
corporation: [명] 기업
crucial: [형] 결정적인, 핵심적인
customer: [명] 고객, 손님
decision: [명] 결정, 결심
drive: [동] 이끌다, 추동하다; [동] 몰다, 운전하다; [명] 원동력
environment: [명] 환경
ethical: [형] 윤리적인
factor: [명] 요인, 요소; [동] (in) 고려하다, 감안하다
fee: [명] 요금, 수수료
financial: [형] 재정적인, 금융적인
freely: [부] 자유롭게
fund: [동] ~에 자금을 대다; [명] 자금, 펀드
handle: [동] 처리하다; [명] 손잡이
implication: [명] 함의
incredibly: [부] 믿을 수 없을 정도로, 엄청나게
institution: [명] 제도, 기관
investment: [명] 투자
lack: [명] 결여, 부족; [동] ~가 결여되어 있다, 부족하다
match: [동] 일치하다; [동] ~에 맞먹다, 상응하다; [동] ~에 부합하다, 맞다
opportunity: [명] 기회
practice: [명] 연습; [명] 실천, 실행; [명] 관행, 관습; [동] 연습하다, 실천하다
responsible (for ~): [형] (~에) 책임이 있는; [형] (~에) 원인이 되는; [형] (~을) 관장하는
skeptical of ~: [형] ~에 회의적인
social justice: [명] 사회 정의
socially: [부] 사회적으로
support: [명] 격려, 도움; [동] 도와주다, 지지하다; [동] 지탱하다, 연명시키다
sustainability: [명] 지속 가능성
sustainable: [형] 지속 가능한
technology: [명] 기술
terms and conditions: [명] 약관과 조항
transparency: [명] 투명성
value: [명] 가치; [동] 가치를 매기다; [동] 소중히 여기다
values-driven: [형] 가치 지향적인
vital: [형] 중요한, 필수적인
... as well as ~: [접] ~뿐만 아니라 ...도
algorithm: [명] 알고리즘

[mg_oj1_4: 모고 단어 4]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
as a result: [부] 그 결과, 결과적으로
autobiographical: [형] 자전적인
characteristic: [명] 특징, 특성; [형] 특유의, 특징적인
comment: [명] 댓글
context: [명] 맥락, 상황
cue: [명] 단서, 신호, 실마리
detail: [명] 세부 사항
facilitate: [동] 촉진하다, 용이하게 하다
feature: [명] 특징, 특성, 기능; [동] (특집으로) 싣다; [동] ~을 특징으로 하다
feedback: [명] 피드백, 되먹임
forget: [동] 잊다, 까먹다
further: [형][부] 그 이상의, 더 나아가
inaccessible: [형] 접근할 수 없는
independent (of ~): [숙] (~와) 무관한, 독립적인
individual: [명] 개(개)인; [형] 개별적인, 개개의
like: [명] 좋아요, 좋아하는 것; [전] ~같은, ~처럼
long-term: [형] 장기적인
make sense of ~: [동] ~을 이해하다
memory: [명] 기억, 기억력
online: [부] 온라인으로, 온라인에서
over time: [부] 시간이 지나면서
periodic: [형] 주기적인
personal: [형] 개인의, 개인적인
platform: [명] 플랫폼, 승강장
post: [동] 게시하다
rehearse: [동] 반복하다
remember: [동] 기억하다
reminder: [명] 알림, 상기시키는 것
retention: [명] 유지
serve as ~: [동] ~로 쓰이다
share: [동] 공유하다; [명] 지분, 몫, 점유율
social media: [명] 소셜 미디어
stabilize: [동] 안정시키다
such as ~: [전] ~와 같은
technological: [형] 기술적인
thus: [부] 이렇게 하여
whereas: [접] ~인 반면에
aid: [명] 보조 도구; [동] (in) 돕다
atmosphere: [명] 대기; [명] 느낌, 분위기
central: [형] 중심적인, 핵심적인
chew: [동] 씹다
close: [형] 자세한, 면밀한; [형][부] 가까운, 가까이
come from ~: [동] ~에서 오다
consider: [동] 여기다; [동] 고려하다, 생각하다
correct: [형] 옳은, 맞는; [동] 고치다, 수정하다
countless: [형] 무수한, 셀 수 없이 많은
everyday: [형] 일상적인
expose ~ to ...: [동] ~을 ...에 노출시키다
function: [동] 기능하다, 작동하다; [명] 기능, 작동; [명] 함수
fusion: [명] 융합
glasses: [명] 안경
inspection: [명] 검사, 조사
interaction: [명] 상호 작용
multisensory: [형] 다중 감각의
normal: [명] 정상, [형] 정상인
normally: [부] 정상적으로
ordinary: [형] 평범한, 일반적인
regular: [형] 보통의, 평상시의
remarkable: [형] 놀랄 만한, 주목할 만한
reveal: [동] 보여 주다
seem like ~: [동] ~처럼 보이다
sense: [명] 감각; [동] 느끼다, 감지하다
sensory: [형] 감각의
signal: [명] 신호; [동] 나타내다, 신호를 보내다
smell: [명] 냄새; [동] 냄새를 맡다, 냄새가 ~다
sound: [명] 소리; [동] 소리내다, 소리다 ~다
take ~ for granted: [동] ~을 당연시하다
taste: [명] 맛
texture: [명] 질감
tool: [명] 도구
approach: [명] 접근(법)

[mg_oj1_5: 모고 단어 5]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
automobile: [명] 자동차
being: [명] 존재
clothing: [명] 의류
consume: [동] 소비하다; [동] 먹다, 섭취하다
consumer: [명] 소비자
convince: [동] 확신시키다, 설득하다
creative: [형] 창의적인
division: [명] 부서; [명] 나눔, 나누기
easy: [형] 편한, 어려움 없는
entire: [형] 전체의
extend: [동] 확장하다, 연장하다
fashion: [명] 패션; [명] 유행
fashionable: [형] 유행하는
frequently: [부] 자주
goods: [명] 상품, 제품
indefinitely: [부] 무기한으로
industry: [명] 산업
invent: [동] 발명하다, 고안하다
literally: [부] 말 그대로
marketing: [명] 마케팅
matter: [동] 중요하다
mobile phone: [명] 휴대 전화
multiple: [형] 다수의, 다양한
no longer: [부] 더 이상 ~ 아닌
outdated: [형] 구식의
perfectly: [부] 완벽하게
permanent: [형] 영구적인
produce: [동] 만들어내다, 생성하다; [명] 농작물
purchase: [명] 구매; [동] 구매하다
quantity: [명] 수량
stuff: [명] 물건
use: [명] 용도
according to ~: [전] ~에 따르면
appeal: [명] 호소력, 매력; [동] 호소하다
collect: [동] 모으다, 수집하다
come with ~: [동] ~와 함께 나오다
fill ~ in: [동] ~을 채우다
finish line: [명] 결승선
finished with ~: [형] ~을 끝마친
head start: [명] 앞선 출발
identical: [형] 동일한
illusory: [형] 착각의, 환상에 불과한
it feels like ~: [숙] ~한 것처럼 느껴진다
motivate: [동] ~에게 (…하도록) 동기를 부여하다
motivating: [형] 동기를 부여하는
open: [형] 비어 있는, 열려 있는
out of ~: [전] ~ 중(에서)
partner with ~: [동] ~와 협력하다
perceive: [동] 인식하다, 지각하다
preexisting: [형] 이미 존재하는
progress: [명] 진보, 진전; [동] 진보하다, 진전하다
reach: [동] ~에 도달하다
reward: [명] 보상
slot: [명] 칸, 구멍
stamp: [명] 도장
strictly speaking: [부] 엄밀히 말하면
accept: [동] 받아들이다, 수용하다, 인정하다
billionaire: [명] 억만장자
broke: [형] 무일푼의, 파산한
businessman: [명] 사업가
catch one’s eye: [동] 눈길을 끌다
compensate: [동] 보답하다
expect: [동] 기대하다
generosity: [명] 관대함
give: [동] 베풀다; [동] 주다
headline: [명] (신문의) 표제
hesitate: [동] 주저하다
in return: [부] 대가로
introduce ~ to …: [동] (~에게 …을) 소개하다, 처음 접하게 하다
journalist: [명] 기자
kill time: [동] 시간을 때우다
moment: [명] 순간, 때, 시점

[mg_oj1_6: 모고 단어 6]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
newsstand: [명] 신문 가판대
now (that) ~: [접] 이제 ~이므로
realize: [동] 깨닫다; [동] 실현하다, 현실화하다
reply: [동] ~라고 대답하다
stuck: [형] 갇힌, 끼인, 정체된
wealthy: [형] 부유한
willingness: [명] 의지
condition: [명] 상태, 조건
director: [명] 관리자, 책임자
discover: [동] 발견하다
donate: [동] 기부하다, 기증하다
donation: [명] 기부, 기증
gladly: [부] 기꺼이
grateful: [형] 감사하는
invite: [동] 초대하다, 이끌다
meaningful: [형] 의미 있는
non-fiction: [명] 논픽션, 허구가 아닌 장르
novel: [명] 소설
operating: [형] 운영의, 운용의
pleased: [형] 기쁜
poetry: [명] 시(詩)
anxious: [형] 불안한, 걱정하는
delay: [동] 지연시키다; [명] 지연, 연기
delighted: [형] 기쁜, 즐거운
find out: [동] 알아내다, 발견하다
frustrated: [형] 좌절한, 실망한
hesitation: [명] 주저, 망설임
indifferent: [형] 무관심한
let out: [동] 내뱉다, 내보내다
make it in time: [동] 제때 도착하다, 시간 안에 해내다
mechanical: [형] 기계적인, 기계의
on one's way to ~: [전] ~로 가는 중인
relief: [명] 안도, 안심
relieved: [형] 안도한
settle: [동] 자리를 잡다, 정착하다
afraid (of ~): [형] (~을) 무서워하는
attention: [명] 주목, 주의, 집중
automatically: [부] 자동적으로, 무의식적으로
behavior / behaviour: [명] 행동, 행위
capture: [동] 사로잡다, 포획하다, 포착하다
coach: [동] 코치하다, 지도하다
encouragement: [명] 격려, 촉진
eventually: [부] 결국, 마침내
fine-tune: [동] 미세 조정하다
focus: [동] (on)(~에) 집중하다, 초점을 맞추다; [명] 초점, 집중
gentle: [형] 부드러운, 온화한
peer: [명] 또래, 동료
praise: [명] 칭찬; [동] 칭찬하다
remind (~ of ...): [동] (~에게 ...을) 상기시키다
step by step: [부] 단계적으로, 차근차근
step up to the plate: [동] 책임을 다하다, 나서다
achieve: [동] 성취하다, 달성하다
back up: [동] 뒷받침하다
basis: [형] 기본적인, 근본적인; [명] 기초, 기본
classical: [형] 고전적인, 전통적인
competing: [형] 경쟁하는
concept: [명] 개념
effective: [형] 효과적인
encounter: [동] 마주치다, 접하다
evaluate: [동] 평가하다
evidence: [명] 증거
factual: [형] 사실에 근거한
figure out: [동] (out) 알아내다, 이해하다
justification: [명] 정당화
justify: [동] 정당화하다
open mind: [명] 열린 마음
persuasive: [형] 설득력 있는
seek: [동] 추구하다, 찾다
self-defense: [명] 자기 방어
statement: [명] 진술, 말; [명] 상태; [명] 명세서
breadth: [명] 폭, 넓이
challenging: [형] 도전적인, 어려운

[mg_oj1_7: 모고 단어 7]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
chances are: [부] 아마도 ~일 것이다
contrary: [명] 반대
creativity: [명] 창의성
discovery: [명] 발견
enhance: [동] 향상시키다, 높이다
harmful: [형] 해로운, 유해한
imagination: [명] 상상력
insight: [명] 통찰
invention: [명] 발명(품)
likewise: [부] 마찬가지로
limited: [형] 제한된
narrow down: [동] 좁히다
on the contrary: [부] 반대로, 오히려
outcome: [명] 결과
pay attention to ~: [동] ~에 주의를 기울이다
pop up: [동] 갑자기 떠오르다, 나타나다
potentially: [부] 잠재적으로
related: [형] 관련된
scope: [명] 범위
solution: [명] 해결책; [명] 용액
specific: [형] 구체적인, 특정한
spontaneous: [형] 자발적인, 즉흥적인
suppose: [동] 생각하다, 가정하다
take place: [동] 일어나다, 발생하다, (행사 등이) 열리다
unexpected: [형] 예기치 않은, 뜻밖의
valuable: [형] 귀중한, 가치 있는
amend: [명] 보상, 수정
apologize: [동] 사과하다
corrode: [동] 부식시키다, 약화시키다
destructive: [형] 파괴적인
guilty: [형] 죄책감을 느끼는
hold up: [동] ~을 비교하다, ~을 기준으로 삼다
in fact: [부] 사실은, 실제로
make amends: [동] 보상하다, 잘못을 바로잡다
motivator: [명] 동기 부여 요인
negative: [형] 부정적인
positive: [형] 긍정적인
powerful: [형] 강력한, 힘 있는
replace: [동] 대신하다, 대체하다
shame: [명] 수치심
uncomfortable: [형] 불편한
balance: [명] 균형; [동] 균형을 맞추다
baseline: [명] 기준선, 기본 수준
drop: [동] 떨어지다, 하락하다; [명] 추락, 떨어짐; [동] (off) 맡기다, 갖다놓다
equal: [형] 동등한, 같은
homeostasis: [명] 항상성
immediate: [형] 즉각적인, 바로 주변의
in order toR: [부] ~하기 위해
occur: [동] 일어나다, 발생하다
physics: [명] 물리학
pleasure: [명] 즐거움, 기쁨
rebalance: [동] 균형을 다시 맞추다
scroll: [동] 스크롤하다
universe: [명] 우주
with this in mind: [부] 이것을 염두에 두고
a great deal: [부] 매우 많이, 상당히
except: [전] ~을 제외하고
extent: [명] 정도, 범위
not ~ at all: [부] 전혀 ~하지 않다
percentage: [명] 비율, 백분율
respondent: [명] 응답자
selected: [형] 선정된
survey: [명] 설문 조사
trust: [명] 믿음, 신뢰; [동] (사람을) 신뢰하다, 믿다
article: [명] 기사, 글
call for: [동] ~을 요구하다, 촉구하다
campaign: [명] 캠페인, 운동; [동] 운동을 벌이다, 캠페인에 참여하다
career: [명] 직업, 경력
conservation: [명] 보호, 보존
conservationist: [명] 환경 보호론자
contribute (to ~): [동] 기여하다, 공헌하다; [동] 원인이 되다
establishment: [명] 설립, 확립

[mg_oj1_8: 모고 단어 8]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
expedition: [명] 탐험, 원정
figure: [명] 인물, 주요 인사
found: [동] 설립하다
have an influence on ~: [동] ~에 영향을 미치다
inspire: [동] 고무하다, 자극하다, 영감을 주다
national park: [명] 국립 공원
organization: [명] 조직, 기구, 단체
protection: [명] 보호
wildlife: [명] 야생 동물
activity: [명] 활동
basic: [형] 기본적인, 근본적인; [명] 기초, 기본
beginner: [명] 초보자
design: [명] 디자인, 설계
explore: [동] 탐사하다, 탐구하다
hands-on: [형] 직접 해보는, 실습의
on a first-come, first-served basis: [부] 선착순으로
on site: [부] 현장에서
participation: [명] 참가, 참여
register: [동] 등록하다
registration: [명] 등록
schedule: [명] 일정, 스케줄
annual: [형] 연례의, 매년의
entry: [명] 입장, 참가; [명] 출품작, 응모작
festival: [명] 축제
for free: [부] 무료로
leave happy: [동] 즐겁게 떠나다
parking: [명] 주차
performance: [명] 공연, 연기
sample: [명] 샘플, 시식품
tasting: [명] 시식
throughout: [전] ~동안 내내, ~전체에
all walks of life: [명] 각계각층
complexity: [명] 복잡성
connect: [동] 연결하다
depth: [명] 깊이, 깊은 곳
despite: [전] ~에도 불구하고
emotion: [명] 감정
empathize: [동] 공감하다
enduring: [형] 지속적인, 영속하는
essence: [명] 본질
expression: [명] 표정, 표현
landscape: [명] 양상, 풍경
literature: [명] 문학; [명] 문헌
nuance: [명] 미묘한 차이, 뉘앙스
reflect: [동] 반사하다; [동] 반영하다; [동] (on) 숙고하다
relevance: [명] 관련성
retain: [동] 유지하다
significance: [명] 중요성, 의의
testament: [명] 증거, 증명
timeless: [형] 시대를 초월한
transcend: [동] 초월하다
triumph: [명] 승리, 대성공
block out: [동] 차단하다
boundary: [명] 경계
concentrate: [동] 집중시키다, 모으다
confuse: [동] 혼란스럽게 하다
distract: [동] 집중을 방해하다
field of vision: [명] 시야
hesitant: [형] 망설이는, 주저하는
isolate: [동] 분리하다, 고립시키다
keep track of ~: [동] ~을 파악하다, 추적하다
observation: [명] 관찰
organise: [동] 정리하다, 조직하다
unwieldy: [형] 다루기 힘든, 불편한
viewfinder: [명] 뷰파인더 (관찰 도구)
whole: [명] 전체
add up: [동] 쌓이다, 누적되다
age: [동] 나이가 들다
ancient: [형] 고대의
crucially: [부] 결정적으로, 중요하게는

[mg_oj1_9: 모고 단어 9]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
ever-changing: [형] 끊임없이 변화하는
imperceptibly: [부] 감지할 수 없을 정도로
interconnected: [형] 상호 연결된
mere: [형] 단순한
microscopic: [형] 미세한
network: [명] 신경망, 네트워크
neural: [형] 신경의
philosopher: [명] 철학자
point out: [동] 지적하다
rightly: [부] 올바르게
seemingly: [부] 겉보기에
static: [형] 정적인, 움직이지 않는
surrounding: [형] 주위의, 주변의; [명] (-s) 환경, 주변
association: [명] 연관성, 연상
at least: [부]  적어도, 최소한
connection: [명] 연결, 관계
consciously: [부] 의식적으로
counterpart: [명] 대응하는 사람, 상대방
diverse: [형] 여러 가지의, 다양한
habit: [명] 습관
learner: [명] 학습자
likely: [형] (toR) 가능성 있는, 할 것 같은; [부] 아마도
location: [명] 장소, 위치
numerous: [형] 수많은
rather than ~: [전] ~이라기보다는, ~이 아니라
recall: [동] 기억해내다, 회상하다; [동] 회수하다, 리콜하다
reinforce: [동] 강화하다
spot: [명] 장소, 지점
trial: [명] 실험, 시도
variety: [명] 다양성
distinguish: [동] 구별하다
equip: [동] 갖추다, 준비시키다
evolution: [명] 진화, 발전
exact: [형] 정확한
familiar: [형] 친숙한, 익숙한
identify: [동] 확인하다, 식별하다; [동] 동일시하다
majority: [명] 대다수
obviously: [부] 분명히
odor: [명] 냄새
olfactory: [형] 후각의
participant: [명] 참가자, 참여자
perception: [명] 인식, 지각
respond: [동] 대응하다, 응답하다
shape: [동] 형성하다, 만들다; [명] 형태, 형상
unable toR: [형] ~할 수 없는
well-equipped toR: [형] ~할 준비가 잘 되어 있는
adapt: [동] 적응하다
circumstance: [명] 상황, 환경
conditioning: [명] 조건화, 훈련
consequence: [명] 결과, 영향
correctly: [부] 올바르게
disadvantage: [명] 불이익, 단점
discomfort: [명] 불편함
in favor of ~: [전] ~을 선호하여, ~을 지지하여
in light of ~: [전] ~을 고려하여
in spite of ~: [전] ~에도 불구하고
lead to: [동] ~로 이어지다, 초래하다
particular: [형] 특정한, 개개의
promising: [형] 유망한, 가능성 있는
quit: [동] 그만두다
anxiety: [명] 불안
burnout: [명] 번아웃, 극도의 피로
clarity: [명] 명료함, 명확성
constant: [형] 일정한, 끊임없는
corporate: [형] 기업의
depression: [명] 우울증, 우울감
device: [명] 기기, 장치
digital: [형] 디지털의
evident: [형] 명백한, 분명한
for instance: [부] 예를 들어
implement: [동] 시행하다, 실행하다
insomnia: [명] 불면증

[mg_oj1_10: 모고 단어 10]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
mindfulness: [명] 마음 챙김
minimalism: [명] 미니멀리즘
newfound: [형] 새로 얻은
notification: [명] 알림
professional: [명] 전문직 종사자
purchasing: [형] 구매의
quality: [명] 질, 품질; [명] 특성, 성질; [형] 질좋은
reduce: [동] 줄이다, 감소시키다
set boundaries: [동] 경계를 설정하다
struggle: [동] 어려움을 겪다, 애쓰다
technique: [명] 기술, 기법
associate: [동] 연관짓다
depend on: [동] 의존하다
evaporation: [명] 증발
explosion: [명] 폭발적 증가
forage: [동] 먹이를 찾아다니다
hemisphere: [명] 반구 (구의 반쪽)
hunter-gatherer: [명] 수렵 채집인
intensively: [부] 집중적으로
melt: [동] 녹다, 녹이다
not only[merely] ~ but (also) ...: [접] ~뿐만 아니라 ...도
option: [명] 선택, 선택권
overnight: [부] 하룻밤 사이에, 갑자기
side hustle: [명] 부업
at any one time: [부] 한 번에
aware: [형] 인식하는, 알고 있는
awareness: [명] 인식, 의식
bring to awareness: [동] 의식으로 가져오다, 인식하게 하다
chunk: [명] 덩어리, 묶음
consciousness: [명] 의식
directly: [부] 직접적으로
explicit: [형] 명시적인, 분명한
reel off: [동] 줄줄이 말하다, 줄줄 읊다
retrieve: [동] 검색하다, 되찾다
store: [동] 보관하다, 저장하다; [명] 가게, 창고
visualize: [동] 시각화하다; [동] 마음속으로 그리다
along with ~: [전] ~에 덧붙여, ~와 함께
bend: [동] 구부리다, 굽히다
encode: [동] 부호화하다, 저장하다, 기억하다
gesture: [동] 몸짓하다, 제스처를 취하다
immediately: [부] 즉시, 곧바로
instruction: [명] 지시, 설명
memorable: [형] 기억할 만한, 인상적인
odd: [형] 이상한, 특이한
on one's own: [부] 스스로, 혼자서
pattern: [명] 패턴, 양식
perform: [동] 수행하다, 공연하다
speech: [명] 말하기, 발화, 연설
spontaneously: [부] 자발적으로, 저절로
swing: [동] 흔들리다, 움직이다
accomplish: [동] 이루다, 성취하다, 달성하다
accordingly: [부] 따라서, 그에 맞게
approximately: [부] 대략, 약
consequently: [부] 결과적으로
convert: [동] 전환하다, 변환하다
deforestation: [명] 삼림 벌채
degradation: [명] 저하, 황폐화
emission: [명] 배출, 방출
major: [형] 주요한, 심각한; [명] 전공; [동] (in) 전공하다
no doubt: [부] 의심할 여지 없이
photosynthesis: [명] 광합성
play a role in: [동] ~에서 역할을 하다
presence: [명] 존재, 있음
prevent (~ from ...): [동] (~가 ... 하는 걸) 막다, 예방하다
progressively: [부] 점진적으로
radiation: [명] 복사, 방사선
regulator: [명] 조절자, 조절 장치
release: [동] 방출하다, 내보내다
when it comes to ~: [전] ~에 관해서라면
accurate: [형] 정확한
appropriate: [형] 적절한

[mg_oj1_11: 모고 단어 11]
# 모고 단어들을 적당히 쪼갰다. 쫄지말고 들어가!
assess: [동] 평가하다
dangerous: [형] 위험한
detector: [명] 감지기
determination: [명] 결심, 판단
determine: [동] 결정하다
emotionally: [부] 감정적으로
fight or flight: [명] 투쟁 도피, 싸우거나 도망치는 반응
generate: [동] 생성하다
in reality: [전명] 실제로, 현실에서는
in the first place: [부] 애초에, 처음부터
internally: [부] 내부적으로
launch: [동] 시작하다, 개시하다; [동] 발사하다; [동] 출시하다
psychologist: [명] 심리학자
rational: [형] 이성적인
response: [명] 반응, 응답
suggest: [동] 제안하다; [동] 시사하다, 암시하다
unconscious: [형] 무의식적인
aim for: [동] ~을 목표로 하다
attempt: [명] 시도[도전]; [동] 시도하다
attendance: [명] 출석, 참석(자 수)
certainty: [명] 확실성
closeness: [명] 접근성, 근접함
commercial: [형] 상업적인
contest: [명] 경쟁, 대회
exhilarating: [형] 신나는, 활기를 주는
facility: [명] 시설
frustrating: [형] 좌절감을 주는
marketer: [명] 마케터, 판매 전문가
opponent: [명] 상대방, 적수
overcome: [동] 극복하다
perspective: [명] 관점, 시각
predictability: [명] 예측 가능성
premium: [형] 고급의, 프리미엄의
profit: [명] 이익, 수익; [동] 이익을 얻다
significant: [형] 중요한, 유의미한, 상당한
spectator: [명] 관중
systematic: [형] 체계적인
uncertain: [형] 불확실한
unpredictable: [형] 예측할 수 없는
valued: [형] 가치 있는, 소중히 여겨지는
variability: [명] 변동성, 가변성
all along: [부] 줄곧, 내내
announce: [동] 발표하다, 알리다
audience: [명] 청중, 관객
bond: [명] 결합, 유대, 결속
bother: [동] 신경 쓰이게 하다, 괴롭히다
can't help but: [동] ~하지 않을 수 없다
capital: [명] 수도
compare: [동] 비교하다
competition: [명] 대회, 경쟁
confident: [형] 자신감 있는
congratulate: [동] 축하하다
dedication: [명] 헌신, 전념
embarrassed: [형] 부끄러운, 당황한
jealous: [형] 질투하는
masterpiece: [명] 걸작, 명작
moved by ~: [형] ~에 감동받은
nervous: [형] 초조한, 불안한; [형] 신경의
pay off: [동] 성과를 거두다, 보람이 있다
pour: [동] 쏟아붓다, 쏟다
recognition: [명] 인정, 인식
solo: [형] 단독의, 개인의
strengthen: [동] 강화하다
talented: [형] 재능 있는
to one's surprise: [부] 놀랍게도
vocalist: [명] 보컬리스트, 가수
with all one's heart: [전명] 온 마음을 다해


[passage_CE_L4: 4과 지문]
# 글을 보며 뜻을 떠올려보는 연습
=== 1. 도입부 ===
[[Imagine | imagine: [동] 상상하다, 마음속에 그리다]] you have fallen down and broken your right arm. 
There are some things that would be difficult to do with your [[injured | injure: [동] 다치게 하다, 부상 입히다]] arm. 
For example, you might not be able to carry heavy boxes or ride your bike. 
What about [[accessing | access: [동] (컴퓨터로) ~에 접속하다]] the Internet? 
If you are [[right-handed | right-handed: [형] 오른손잡이인]], using a computer mouse or touchscreen with your left hand would be [[awkward | awkward: [형] (동작∙행동 등이) 어색한]] and [[take a lot of time | take time: [동] 시간이 걸리다, 시간을 가지다]].
However, this is a [[minor | minor: [형] 작은, 사소한]] [[challenge | challenge: [명] 도전, 과제; [동] 도전하다; [동] 이의를 제기하다]] compared to what some of us [[face | face: [명] 얼굴, 면; [동] ~에 직면하다]] on the Internet. 
For people with certain [[disabilities | disability: [명] 장애, 불능]], many websites can be [[nearly | nearly: [부] 거의]] [[impossible | impossible: [형] 불가능한]] to use. 
This is the reason why web [[accessibility | accessibility: [명] 접근성, 이용성]] is important. 
Web [[accessibility | accessibility: [명] 접근성, 이용성]] is the [[practice | practice: [명] 연습; [명] 실천, 실행; [동] 연습하다, 실천하다]] of making sure that websites can be used by everyone, [[including | include: [동] 포함하다]] people with [[disabilities | disability: [명] 장애, 불능]]. 
So what exactly makes a website [[accessible | accessible: [형] 접근 가능한, 이용 가능한]]?
Here are some [[common | common: [형] 공통의; [형] 흔한]] [[features | feature: [명] 특징, 특성]] of [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites.

=== 2. 이미지 텍스트 묘사 ===
*Text [[Descriptions | description: [명] 설명, 묘사]] of Images*
[[Along with | along with ~: [전] ~에 덧붙여]] text, most websites [[include | include: [동] 포함하다]] other [[forms | form: [명] 형태, 형식; [동] 형성하다]] of information, such as images. 
Sometimes such [[visual | visual: [형] 시력의]] information is important for understanding the text. This is a problem for users with [[visual | visual: [형] 시력의]] [[disabilities | disability: [명] 장애, 불능]]. 
When they go on a website, they often use programs called “screen readers,” which read online text [[aloud | aloud: [부] 큰 소리로]]. 
However, these programs cannot “read” images.
[[Accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites solve this problem by providing [[alternative | alternative: [형] 대안의, 대신의]] text, also [[known as | known as ~: [형] ~라고 알려진]] “alt text.” 
Alt text is a [[brief | brief: [형] 간략한]] [[description | description: [명] 설명, 묘사]] of non-textual information. 
[[For instance: [부] 예를 들어]], if an image shows a group of students, its alt text would explain how many students are in the image and what they are doing. 
Screen readers can [[detect | detect: [동] 감지하다, 알아채다]] this alt text and read it [[aloud | aloud: [부] 큰 소리로]]. 
This way, alt text [[ensures | ensure: [동] 보장하다, 확실하게 하다]] that people with [[visual | visual: [형] 시력의]] [[disabilities | disability: [명] 장애, 불능]] can [[access | access: [동] (컴퓨터로) ~에 접속하다]] more of the information on a website.

=== 3. 구술 표기와 자막 ===
*[[Transcripts | transcript: [명] (구술된 내용을) 글로 옮긴 기록]] and [[Captions | caption: [명] (텔레비전 등의) 자막]] for Multimedia Content*
In some cases, [[audio | audio: [형] 소리의, 음성의]] content cannot be [[accessed | access: [동] (컴퓨터로) ~에 접속하다]] or understood. 
Some people may have [[hearing | hearing: [명] 청각, 청력]] [[disabilities | disability: [명] 장애, 불능]], while others might be in places where they can’t listen to [[audio | audio: [형] 소리의, 음성의]], such as a quiet library. 
Therefore, [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites often [[offer | offer: [동] 제공하다; [명] 제공, 제안]] other ways to [[access | access: [동] (컴퓨터로) ~에 접속하다]] information that is [[presented | present: [동] (정보 등)을 제시하다, 제공하다; [명] 현재; [명] 선물]] in [[audio | audio: [형] 소리의, 음성의]] [[form | form: [명] 형태, 형식; [동] 형성하다]].
For example, they may provide [[transcripts | transcript: [명] (구술된 내용을) 글로 옮긴 기록]] or [[captions | caption: [명] (텔레비전 등의) 자막]] that can help users [[access | access: [동] (컴퓨터로) ~에 접속하다]] this information. 
[[Transcripts | transcript: [명] (구술된 내용을) 글로 옮긴 기록]] are text versions of the entire [[audio | audio: [형] 소리의, 음성의]] content, while [[captions | caption: [명] (텔레비전 등의) 자막]] are text versions of the [[audio | audio: [형] 소리의, 음성의]] that [[appear | appear: [동] 나타나다, 생기다; [동] ~해 보이다]] in a video as it plays. 
[[Captions | caption: [명] (텔레비전 등의) 자막]] [[include | include: [동] 포함하다]] not only the text version of the [[spoken | spoken: [형] 구어의]] words but also [[descriptions | description: [명] 설명, 묘사]] of the music and other sounds in the video.

=== 4. 보고 듣기 쉬운 컨텐츠 ===
*[[Content: [명] 컨텐츠; [명] 함유물, 함량; [형] 만족하는]] That Is Easy to See and Hear*
Having a [[visual | visual: [형] 시력의]] [[disability | disability: [명] 장애, 불능]] doesn’t [[necessarily | necessarily: [부] 필연적으로, 불가피하게, 반드시]] mean a person can’t see at all. 
Some people, [[including | include: [동] 포함하다]] many [[elderly | elderly: [형] 나이가 지긋한, 연로한]] people, simply have [[poor | poor: [형] (환경·상황 등이) 좋지 않은; [형] 가난한]] [[eyesight | eyesight: [명] 시력]]. 
This makes it difficult for them to read. 
For this reason, [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites have a [[background | background: [명] 바탕, 배경]] color that [[contrasts | contrast: [동] 대조를 이루다; [명] 대조, 대비]] with the color of their text. 
This makes the text clear enough for most people to see.
[[As for | as for ~: [전] ~에 대해서 말하자면]] [[audio | audio: [형] 소리의, 음성의]] content, [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites allow users to [[adjust | adjust: [동] 조절하다, 맞추다]] the volume of [[background | background: [명] 바탕, 배경]] sound or to turn it off [[altogether | altogether: [부] 완전히, 전적으로]]. 
This gives users both with and without [[hearing | hearing: [명] 청각, 청력]] [[difficulties | difficulty: [명] 장애, 어려움]] more [[control | control: [명] 지배(권), 통제(권)]] over their experience while they are using the sites.

=== 5. 완전한 키보드 탐색 ===
*[[Complete | complete: [형] 전부의, 완료된; [동] 완수하다, 완료하다]] [[Navigation | navigation: [명] 탐색, 내비게이션]] Using the Keyboard*
Some users have [[disabilities | disability: [명] 장애, 불능]] that [[limit | limit: [동] 제한하다, 한정하다; [명] 제한, 한계]] the [[movement | movement: [명] 움직임, 동작; [명] (사회적인) 운동]] of their hands. 
They [[rely on | rely on ~: [동] ~에 의존하다, 의지하다]] their keyboards, rather than a mouse, to navigate websites. 
On [[accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites, users can [[access | access: [동] (컴퓨터로) ~에 접속하다]] everything on the site using only a keyboard. 
This means that [[links | link: [명] (웹사이트 등의) 링크; [동] 연결하다]], buttons, and [[fields | field: [명] 운동장, 논, 밭, 영역; [명] (컴퓨터 문서의) 필드, 칸]], which are spaces where information is entered, can be [[accessed | access: [동] (컴퓨터로) ~에 접속하다]] through keyboard [[navigation | navigation: [명] 탐색, 내비게이션]]. 
Users navigate the websites by [[making use of | make use of ~: [동] 이용하다]] keys such as the space bar, the [[arrow | arrow: [명] 화살, 화살표]] keys, the enter key, and the tab key. 
For example, they can use the tab key to [[jump | jump: [동] 건너뛰다]] from one part of a web page to another. 
Both users with [[disabilities | disability: [명] 장애, 불능]] and those with [[temporarily | temporarily: [부] 일시적으로]] [[injured | injure: [동] 다치게 하다, 부상 입히다]] hands can [[benefit | benefit: [명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다]] from this [[kind | kind: [명] 종류; [형] 착한, 친절한]] of [[navigation | navigation: [명] 탐색, 내비게이션]].

=== 6. 색상 이외의 지표 ===
*[[Indicators | indicator: [명] 지표]] [[Other than | other than ~: [전] ~ 외에, ~ 말고]] Color That [[Convey | convey: [동] (정보∙생각 등)을 전달하다]] Information*
[[Color blindness | color blindness: [명] 색맹]] is a [[common | common: [형] 공통의; [형] 흔한]] [[visual | visual: [형] 시력의]] [[disability | disability: [명] 장애, 불능]]. 
People with [[color blindness | color blindness: [명] 색맹]] find it difficult to [[tell | tell ~ apart: [동] 구별하다]] some colors [[apart | tell ~ apart: [동] 구별하다]]. 
This can cause problems, especially when graphs and charts only use colors to show the [[differences | difference: [명] 차이(점), 다름]] between sets of information. 
[[Accessible | accessible: [형] 접근 가능한, 이용 가능한]] websites use other [[indicators | indicator: [명] 지표]] [[along with | along with ~: [전] ~에 덧붙여]] the colors. 
For example, a line in green may also be [[dotted | dotted: [형] 점이 찍힌]], while a line in blue is [[solid | solid: [명] 고체; [형] 단단한, 굳건한; [형] 죽 이어진, 연속적인]]. 
This [[ensures | ensure: [동] 보장하다, 확실하게 하다]] that everyone can [[tell the two lines apart | tell ~ apart: [동] 구별하다]].

=== 7. 마무리 ===
The [[accessibility | accessibility: [명] 접근성, 이용성]] [[features | feature: [명] 특징, 특성]] of websites don’t just help people with [[disabilities | disability: [명] 장애, 불능]]. 
They can make online experiences easier for everyone, [[regardless of | regardless of ~: [전] ~에 상관없이]] abilities or situations. 
When websites are easy to navigate and understand, we can all [[benefit | benefit: [명] 이득, 이익; [동] 이익이 되다; [동] (from) 이익을 얻다]] from a more [[inclusive | inclusive: [형] 차별 없는, 포용적인]] online experience.

=== 8. 컬쳐노트 ===
*Making the Web More [[Culturally | culturally: [부] 문화적으로]] [[Accessible | accessible: [형] 접근 가능한, 이용 가능한]]*
Reading and writing systems are different across cultures. 
People from Western cultures read and write from left to right, while those from some Middle Eastern cultures read and write from right to left. 
People from some Eastern cultures, like that of Japan, read and write from top to bottom. 
Some [[global | global: [형] 세계적인]] websites [[take | take ~ into consideration: [동] 고려하다]] these differences [[into consideration | take ~ into consideration: [동] 고려하다]] and [[adjust | adjust: [동] 조절하다, 맞추다]] their websites for people in different [[regions | region: [명] 지역, 지방]]. 
In countries where text is read from right to left, the website’s [[search | search: [명] 검색; [동] 수색하다, 검색하다]] button is on the left and the logo is on the right. 
If you visit the same websites in a different language [[setting | setting: [명] (기계를 조절하는) 설정]], you will see a different [[format | format: [명] (컴퓨터 등에 사용되는) 형식, 포맷]].


[passage_mg_h1_25.10: 고1 25.10모]
# 글을 보며 뜻을 떠올려보는 연습
=== 고1 25.10모 - 21 ===
[[Currently | currently]], [[urban | urban]] [[regeneration | regeneration]] [[projects | project]] in [[degraded | degrade]] [[areas | area]] have been [[promoted | promote]] as [[improving | improve]] the [[wellbeing | wellbeing]] of [[residents | resident]] and [[solving | solve]] [[environmental | environmental]] [[injustice | injustice]] problems.
However, such [[environmental | environmental]] [[improvements | improvement]] in [[ethnic | ethnic]] [[communities | community]] and/or [[low‑income | low-income]] [[households | household]] can [[create | create]] an [[urban | urban]] green [[space | space]] [[paradox | paradox]].
The [[creation | creation]] of new, [[high‑quality | high-quality]] green [[spaces | space]] can [[increase | increase]] [[attractiveness | attractiveness]], making these [[neighbourhood | neighbourhood]] more [[desirable | desirable]].
[[By contrast | by contrast]], the [[cost | cost]] of [[housing | housing]] can [[rise | rise]], and [[residents | resident]] may not be [[able to afford | afford toR]] the [[rent | rent]].
This [[results in | result in ~]] the [[exclusion | exclusion]] or [[displacement | displacement]] of the [[poor | poor]] [[neighbourhood’s | neighbourhood]] [[residents | resident]], who were [[intended | intend]] to [[benefit from | benefit]] the [[ecosystem | ecosystem]] services [[provided | provide]] by the new green [[space | space]].
[[In turn | in turn]], the [[residents | resident]] may only be [[able to afford | afford toR]] to live in a [[similar | similar (to ~)]] [[degraded | degrade]] [[neighbourhood | neighbourhood]] [[to | similar (to ~)]] the one they left, with [[low | low]] [[access | access]] to green [[infrastructure | infrastructure]].

=== 고1 25.10모 - 23 ===
Rome was [[said to | said toR]] have been a [[melting pot | melting pot]] [[from the very start | from the start]].
The [[historian | historian]] Livy [[claimed | claim]] the city's [[original | original]] [[population | population]] was [[comprised of | comprised of ~]] [[immigrants | immigrant]] [[flooding | flood]] in from all [[directions | direction]], [[attracted | attract]] by Romulus's [[deliberate | deliberate]] [[policy | policy]] of [[nondiscrimination | nondiscrimination]].
It was this [[initial | initial]] [[openness | openness]], Livy [[asserts | assert]], that [[laid | lay (down)]] the [[foundations | foundation]] for the [[later | later]] [[strength | strength]] and [[success | success]] of the city.
Romans [[described | describe]] their city as [[multicultural | multicultural]] in the [[generations | generation]] after its [[foundation | foundation]].
[[Tradition | tradition]] [[held that | hold that ~]] only [[a minority of | a minority of ~]] the city's [[legendary | legendary]] kings were [[Roman-born | Roman-born]], with the others all [[arriving | arrive]] as [[immigrants | immigrant]] before being [[chosen for | chosen for ~]] the [[throne | throne]] for their [[virtues | virtue]] and [[merits | merit]].
As the [[empire | empire]] [[expanded | expand]] [[across | across]] three [[continents | continent]], Rome [[eagerly | eagerly]] [[adopted | adopt]] new [[cultural | cultural]] [[influences | influence]] and [[absorbed | absorb]] [[incoming | incoming]] groups ― [[perhaps | perhaps]] [[a little | a little]] too [[eagerly | eagerly]] for some, who, [[like | like]] the [[poet | poet]] Juvenal, [[complained | complain]] about the [[rapid | rapid]] [[rate | rate]] of [[cultural | cultural]] change.

=== 고1 25.10모 - 26 ===
Dalip Singh Saund was an [[Indian-born | Indian-born]] American [[politician | politician]].
After [[graduating | graduate]] from the University of Punjab in India, he moved to the U.S. to [[attend | attend]] [[graduate school | graduate school]].
He [[earned | earn]] his [[doctoral degree | doctoral degree]] at the University of California in 1924 but could not get a job [[because of | because of ~]] his [[nationality | nationality]].
The next year, he began [[farming | farm]] in Imperial Valley, but he was not [[able to | able toR]] buy land [[without | without]] U.S. [[citizenship | citizenship]].
Dalip [[developed | develop]] an [[interest | interest]] in [[politics | politics]] and he often [[spoke out on | speak out on ~]] Indian and [[political | political]] [[topics | topic]].
He went to Washington, D.C. and [[promoted | promote]] a [[bill | bill]] that would [[allow | allow ~ toR]] Indians [[to | allow ~ toR]] become U.S. [[citizens | citizen]].
The [[bill | bill]] was [[passed | pass]] in 1946, and three years [[later | later]] Dalip [[received | receive]] U.S. [[citizenship | citizenship]].
He [[later | later]] became the first Asian to be [[elected to | elect ~ to ...]] the U.S. [[Congress | congress]].

=== 고1 25.10모 - 29 ===
Human [[beings | being]] have [[evolved | evolve]] to [[make the most of | make the most of ~]] the [[resources | resource]] [[available | available]] to them in ways that are [[subtle | subtle]] and [[complicated | complicated]].
When we change our [[diets | diet]], [[especially | especially]] when we do so quickly, we are [[effectively | effectively]] [[conducting | conduct]] huge [[experiments | experiment]] in [[nutrition | nutrition]].
We [[ought to | ought toR]] have more [[humility | humility]].
[[Nutritional science | nutritional science]] is still [[young | young]] and there is so much we do not know.
If we have eaten certain foods in certain ways for [[millennia | millennium / millennia]], we should [[assume | assume]] until it is [[proven | prove]] [[otherwise | otherwise]] that there is [[probably | probably]] a good [[reason | reason]] why.
[[Traditional | traditional]] foods that don't [[fit | fit]] [[neatly | neatly]] on the [[contemporary | contemporary]] [[dietary | dietary]] food plate should [[generally | generally]] be [[chosen | choose ~ over ...]] [[over | choose ~ over ...]] [[highly | highly]] [[processed | process]] ones that do.
We should [[assume | assume]] that traditionally made [[fatty | fatty]] blood [[sausages | sausage]] are [[preferable to | preferable (to ~)]] [[lean | lean]], factory-made salamis; that [[spoonfuls | spoonful]] of [[honey | honey]] are [[superior to | superior to ~]] [[sprinkles | sprinkle]] of [[sweeteners | sweetener]].
[[Witnessing | witness]] how [[poorly | poorly]] [[traditional | traditional]] [[societies | society]] are [[faring | fare]] as they [[undergo | undergo]] a [[nutrition | nutrition]] [[transition | transition]] should make those who have already completed it [[question | question]] whether their [[diets | diet]] have moved too [[far | far]].

=== 고1 25.10모 - 30 ===
While [[convenience | convenience]] and [[technology | technology]] are [[crucial | crucial]], they are not the only [[factors | factor]] [[driving | drive]] Gen Z's [[financial | financial]] [[decisions | decision]].
This [[generation | generation]] is [[incredibly | incredibly]] [[values-driven | values-driven]], and they want to [[bank with | bank with ~]] [[institutions | institution]] that [[match | match]] their [[personal | personal]] [[beliefs | belief]] and [[values | value]].
[[Transparency | transparency]] is [[vital | vital]].
Gen Z is [[skeptical of | skeptical of ~]] large [[corporations | corporation]] and [[institutions | institution]] that [[lack | lack]] [[accountability | accountability]].
They have grown up in a world where information is [[freely | freely]] [[available | available]], and they expect [[complete | complete]] [[transparency | transparency]] from the brands they [[support | support]].
Banks, [[for example | for instance]], must [[clearly | clearly]] [[communicate | communicate]] [[fees | fee]], [[terms and conditions | terms and conditions]], [[as well as | ... as well as ~]] how they [[handle | handle]] [[customers' | customer]] data.
Moreover, [[ethical | ethical]] banking [[practices | practice]] are more important than ever.
Gen Z [[cares about | care about ~]] the [[environment | environment]], [[social justice | social justice]], and the [[ethical | ethical]] [[implications | implication]] of their [[financial | financial]] [[decisions | decision]].
They are interested in [[sustainable | sustainable]] investing, [[supporting | support]] businesses that [[match | match]] their [[values | value]], and ensuring that their money is not being used to [[fund | fund]] [[harmful | harmful]] [[practices | practice]].
Banks that [[offer | offer]] [[socially | socially]] [[responsible | responsible (for ~)]] [[investment | investment]] [[opportunities | opportunity]] and are [[committed to | committed to ~]] [[environmental | environmental]] [[sustainability | sustainability]] will [[attract | attract one's attention]] Gen Z's [[attention | attract one's attention]].

=== 고1 25.10모 - 35 ===
[[Social media | social media]] [[serves as | serve as ~]] an important [[context | context]] to [[facilitate | facilitate]] [[autobiographical | autobiographical]] remembering.
[[Personal | personal]] events [[posted | post]] on [[social media | social media]] [[platforms | platform]] are better [[remembered | remember]] and less [[forgotten | forget]] than those not [[posted | post]], [[independent of | independent (of ~)]] the [[characteristics | characteristic]] of the events.
This may be because [[sharing | share]] [[memories | memory]] [[online | online]] allows [[individuals | individual]] to [[rehearse | rehearse]] and [[make sense of | make sense of ~]] what happened, [[thus | thus]] [[facilitating | facilitate]] [[long-term | long-term]] [[memory | memory]] [[retention | retention]].
[[Online | online]] [[feedback | feedback]] [[such as | such as ~]] [[comments | comment]] and [[likes | like]] [[as well as | ... as well as ~]] [[technological | technological]] [[features | feature]] [[such as | such as ~]] [[algorithms | algorithm]] and [[periodic | periodic]] [[reminders | reminder]] can [[further | further]] [[serve as | serve as ~]] [[memory | memory]] [[cues | cue]] for the [[posted | post]] event [[details | detail]].
[[As a result | as a result]], event [[details | detail]] [[shared | share]] on [[social media | social media]] are [[likely | likely]] [[stabilized | stabilize]] and [[remembered | remember]] [[over time | over time]], [[whereas | whereas]] those not [[shared | share]] may become [[inaccessible | inaccessible]] or [[forgotten | forget]].

=== 고1 25.10모 - 36 ===
[[Multisensory | multisensory]] experiences are a [[central | central]] part of our [[everyday | everyday]] lives, yet we often [[take | take ~ for granted]] them [[for granted | take ~ for granted]], [[especially | especially]] when our [[senses | sense]] [[function | function]] [[normally | normally]] or are [[corrected | correct]] to [[normal | normal]] with [[aids | aid]] [[like | like]] [[glasses | glasses]].
However, [[closer | close]] [[inspection | inspection]] to any, even the most [[ordinary | ordinary]] experiences, [[reveals | reveal]] the [[remarkable | remarkable]] [[multisensory | multisensory]] world in which we live.
[[Consider | consider]] the experience of eating a [[regular | regular]] meal.
At first, it may [[seem like | seem like ~]] an [[ordinary | ordinary]] experience, but it is actually a [[fusion | fusion]] of the [[senses | sense]].
We first eat with our eyes, but we are also [[exposed to | expose ~ to ...]] [[countless | countless]] [[sensory | sensory]] [[signals | signal]] that [[influence | influence]] our eating experience [[such as | such as ~]] food [[textures | texture]], [[tastes | taste]], and [[smells | smell]].
And it does not stop there.
Even the [[sounds | sound]] that [[come | come from ~]] both [[from | come from ~]] the [[atmospheres | atmosphere]] in which we eat and our [[interactions | interaction]] with the food ([[such as | such as ~]] [[chewing | chew]]) and the [[tools | tool]] we [[use | use]] to eat [[influence | influence]] our eating experience.

=== 고1 25.10모 - 39 ===
Those who [[purchase | purchase]] the [[goods | goods]] of a company are called [[customers | customer]].
[[Individuals | individual]] who [[purchase | purchase]] [[goods | goods]] for [[personal | personal]] [[use | use]] are called [[consumers | consumer]]: [[beings | being]] who [[consume | consume]].
Therefore, companies have [[invented | invent]] [[multiple | multiple]] ways to [[ensure | ensure]] that their [[customers | customer]] [[consume | consume]] the [[produced | produce]] items in larger and larger [[quantities | quantity]] and more and more [[frequently | frequently]].
Those who sell food have an [[easy | easy]] time, for food is [[literally | literally]] [[consumed | consume]], so there is always a need to [[purchase | purchase]] new food.
But with more [[permanent | permanent]] things, companies must [[invent | invent]] reasons for their [[customers | customer]] to continue to [[consume | consume]] them.
One [[approach | approach]] is to make the [[stuff | stuff]] that people already have [[outdated | outdated]] by [[convincing | convince]] them that it is [[no longer | no longer]] [[fashionable | fashionable]].
The [[entire | entire]] [[fashion | fashion]] [[industry | industry]] is built to [[convince | convince]] people that [[fashion | fashion]] [[matters | matter]], so they must [[purchase | purchase]] new [[clothing | clothing]], even though the old is still [[perfectly | perfectly]] functionable.
[[Fashion | fashion]] today [[extends | extend]] to [[far | far]] more things than clothes: [[automobiles | automobile]], [[mobile phones | mobile phone]], computers ― the list is [[extended | extend]] [[indefinitely | indefinitely]], [[limited | limit]] only by the [[limits | limit]] of the [[creative | creative]] minds of the [[marketing | marketing]] [[divisions | division]] of companies.

=== 고1 25.10모 - 40 ===
Kivetz, Urminsky, and Zheng [[partnered with | partner with ~]] a cafe to test the [[motivating | motivating]] effect of [[illusory | illusory]] [[progress | progress]] in an [[experiment | experiment]].
[[Customers | customer]] [[received | receive]] a [[reward | reward]] card that [[offered | offer]] one free coffee after they'd bought ten.
While half of the [[customers | customer]] [[received | receive]] a card with ten [[open | open]] [[slots | slot]], the other half got a card with twelve [[open | open]] [[slots | slot]].
Yet the twelve-slot card had two [[preexisting | preexisting]] "bonus" [[stamps | stamp]], so, [[strictly speaking | strictly speaking]], these were [[identical | identical]] [[reward | reward]] programs.
Every [[customer | customer]] who got a card needed to make ten coffee [[purchases | purchase]] (and [[collect | collect]] ten [[stamps | stamp]]) to get their free coffee.
But the [[appeal | appeal]] of the free [[stamps | stamp]] was high.
People who thought they'd gotten a [[head start | head start]] came back to the cafe more often, [[filling in | fill ~ in]] their [[reward | reward]] card more quickly than the others.
When the card [[came with | come with ~]] two [[out of | out of ~]] twelve [[slots | slot]] already filled, [[it felt to | it feels like ~]] [[customers | customer]] [[like | it feels like ~]] they were already 16 percent [[finished with | finished with ~]] the goal before they'd even started.
Believing they were closer to the [[reward | reward]], they were more [[motivated | motivate]] to [[reach | reach]] the [[finish line | finish line]].

=== 고1 25.10모 - 43~45 ===
When [[billionaire | billionaire]] James Walker was once asked by a [[journalist | journalist]], "Is there anyone richer than you?", he [[replied | reply]], "Yes, there is one young man I'll never [[forget | forget]]."
He told the story of when he first met David at a New York airport.
Years ago, James was [[broke | broke]] and [[stuck | stuck]] at the airport, [[killing time | kill time]] reading newspaper [[headlines | headline]] at the [[newsstand | newsstand]].
One [[headline | headline]] [[caught his eye | catch one’s eye]], but he had no money to buy the paper.
Just then, David, working at the [[newsstand | newsstand]] noticed James.
He asked, "Would you [[like | like]] to buy this, sir?"
But, James [[hesitated | hesitate]], saying he had no money.
David smiled and said, "Me, too. But I have enough for this. Take it as a gift."
Three months [[later | later]], James, still [[broke | broke]], met him at the [[newsstand | newsstand]] once more.
Again, David [[gave | give]] him a newspaper without expecting anything [[in return | in return]].
Years passed and James became a [[wealthy | wealthy]] [[businessman | businessman]], but he never [[forgot | forget]] the young man he had met at the airport.
He found David running a small bookstore and visited him there.
He [[introduced | introduce ~ to …]] himself, saying, "David, you helped me twice when you had almost nothing. I want to [[give | give]] you anything you wish."
He looked at him and said, "You can't truly [[compensate | compensate]] me."
James asked, "Why not?"
David [[replied | reply]], "Because I [[gave | give]] to you when I had almost nothing.
You're offering me something [[now that | now (that) ~]] you have everything.
That's just [[generosity | generosity]] at [[convenience | convenience]]. So, I can't [[accept | accept]] your [[offer | offer]]."
James [[realized | realize]] that money doesn't make someone rich.
Remembering that [[moment | moment]], he said to the [[journalist | journalist]], "It's the [[willingness | willingness]] to [[give | give]] even when you have very little that makes you [[wealthy | wealthy]].
And so, David is the richest person I have ever met."


[passage_mg_h1_26.6: 고1 26.6모]
# 글을 보며 뜻을 떠올려보는 연습
=== 고1 26.6모 – 21 ===
A [[classical | classical]] ideal of truth and knowledge is the [[concept | concept]] of a market for ideas: as thinking [[individuals | individual]], we [[encounter | encounter]] [[competing | competing]] ideas, we [[evaluate | evaluate]] them for their best [[fit | fit]] to reality, and then let the best and brightest facts [[form | form]] the [[basis | basis]] of our [[beliefs | belief]].
That would be the scientist's way, in theory [[at least | at least]].
But in [[practice | practice]], most of the time we are in a market for [[justifications | justification]].
We shop for words not because they contain ideas, but because they contain stories about ideas.
Often we are not [[seeking | seek]] [[statements | statement]] as facts to help us [[figure out | figure out]] what we should believe.
Usually we already know what we believe.
What we [[seek | seek]] are [[statements | statement]] to [[justify | justify]] those [[beliefs | belief]] ― the lawyer's way.
Language might be good for this [[function | function]] but we can [[use | use]] it to do better.
By treating language with greater respect, we can [[achieve | achieve]] more than simple [[self-defense | self-defense]].

=== 고1 26.6모 – 24 ===
Let’s look at what is [[occurring | occur]] in your brain when [[scrolling | scroll]] on [[social media | social media]], a quick dopamine [[activity | activity]].
You open your [[social media | social media]] apps and [[immediately | immediately]] you notice you feel really good, your dopamine levels [[increase | increase]] [[incredibly | incredibly]] fast and [[pleasure | pleasure]] is experienced in your brain.
The [[challenge | challenge]] this [[creates | create]] is as with everything in our [[universe | universe]]: as the laws of [[physics | physics]] explain, ‘what goes up, must come down’.
Your brain and body are always [[seeking | seek]] something called ‘[[homeostasis | homeostasis]]’, which simply means [[balance | balance]].
[[With this in mind | with this in mind]], when dopamine levels [[increase | increase]] [[incredibly | incredibly]] fast when [[scrolling | scroll]] [[social media | social media]], the brain then thinks, ‘Wow, how are my dopamine levels so high?’
[[In order to | in order toR]] [[achieve | achieve]] [[homeostasis | homeostasis]], or [[balance | balance]], the dopamine then has to quickly [[drop | drop]] an [[equal | equal]] amount below your [[baseline | baseline]] level in order to [[rebalance | rebalance]], making you feel even worse than before you started [[scrolling | scroll]].

=== 고1 26.6모 – 29 ===
[[Literature | literature]], in its [[essence | essence]], is a [[testament | testament]] to the [[enduring | enduring]] power of human [[creativity | creativity]] and [[expression | expression]].
It [[transcends | transcend]] time and [[space | space]], [[connecting | connect]] us with the thoughts and [[emotions | emotion]] of people from [[all walks of life | all walks of life]], [[across | across]] centuries and cultures.
[[Despite | despite]] the [[rise | rise]] of new technologies and the [[ever-changing | ever-changing]] [[landscape | landscape]] of media, [[literature | literature]] has [[retained | retain]] its [[relevance | relevance]] and [[significance | significance]] as a [[timeless | timeless]] art [[form | form]].
One [[reason | reason]] for [[literature's | literature]] [[enduring | enduring]] power is its [[ability | ability: [명] 능력] to [[capture | capture]] and [[convey | convey]] the [[complexities | complexity]] of the human experience.
Through the written word, authors have the unique [[ability | ability: [명] 능력]] to [[explore | explore]] the [[depths | depth]] of human [[emotion | emotion]], the [[nuances | nuance]] of relationships, and the [[challenges | challenge]] and [[triumphs | triumph]] of the human spirit.
[[Literature | literature]] allows us to see ourselves [[reflected | reflect]] in the pages of a book, to [[empathize | empathize]] with characters different from ourselves, and to gain a deeper understanding of the human [[condition | condition]].

=== 고1 26.6모 – 32 ===
Do you always study in the same [[spot | spot]]? Don’t.
If you study in different places, that helps [[create | create]] [[variety | variety]], and that rich experience can [[reinforce | reinforce]] what you are learning.
When several college students told us they did school work in different places [[rather than | rather than ~]] in some favorite nook, that [[habit | habit]] [[reflected | reflect]] the research on learning.
[[Numerous | numerous]] [[experiments | experiment]] have found that if [[learners | learner]] simply study in [[at least | at least]] two different places, they are more [[likely to | likely]] [[recall]] the material.
In one of the first such [[trials | trial]], two different groups studied a list of words.
Some students returned to the same room twice while their [[counterparts | counterpart]] spent the same amount of time divided between two locations.
When asked to [[recall | recall]] as many words on the list as possible, those who had moved around did [[far | far]] better.
[[Variety | variety]] [[creates | create]] rich [[association | association]], even when those [[connections | connection]] [[form | form]] in the [[background | background]], totally outside of what we are [[consciously | consciously]] thinking.

=== 고1 26.6모 – 34 ===
A [[particularly | particularly: [부] 특히]] [[powerful | powerful]] way in which human [[beings | being]] [[adapt | adapt]] and [[adjust | adjust]] to their [[circumstances | circumstance]] is by changing [[behaviors | behavior / behaviour]] [[in light of | in light of ~]] the [[consequences | consequence]] that they yield.
[[For instance | for instance]], a child who gets [[praised | praise]] by her teacher for doing an exercise [[correctly | correctly]] is [[likely | likely]] to continue doing the exercise in that way.
A dancer who feels that a [[particular | particular]] [[conditioning | conditioning]] exercise is not giving any results is [[likely | likely]] to give that exercise up [[in favor of | in favor of ~]] another one that seems more [[promising | promising]].
In general, we [[tend to | tend toR: [동] ~하는 경향이 있다]] do things that bring us some [[kind | kind]] of [[benefit | benefit]] or act in ways that help us avoid some [[kind | kind]] of problem, [[discomfort | discomfort]], or [[disadvantage | disadvantage]].
We also [[tend to | tend toR: [동] ~하는 경향이 있다]] do fewer things (or stop doing things) that [[lead to | lead to]] problems, [[discomfort | discomfort]], or [[disadvantages | disadvantage]], and we [[tend to | tend toR: [동] ~하는 경향이 있다]] avoid acting in ways that do not bring any [[benefit | benefit]] or [[reward | reward]].

=== 고1 26.6모 – 35 ===
It is [[evident | evident]] through various case studies that [[adopting | adopt]] [[digital | digital]] [[minimalism | minimalism]] can [[lead to | lead to]] improved mental health outcomes.
[[For instance | for instance]], a study [[conducted | conduct]] by researchers at Stanford University found that [[participants | participant]] who [[limited | limit]] their [[use | use]] of [[social media | social media]] and [[digital | digital]] [[devices | device]] reported lower levels of stress, [[anxiety | anxiety]], and [[depression | depression]].
By reducing the [[constant | constant]] stream of information and [[notifications | notification]], [[individuals | individual]] were [[able to | able toR]] [[focus | focus]] more on [[meaningful | meaningful]] [[interactions | interaction]] and activities that [[promoted | promote]] [[well-being | wellbeing]].
In another case, a [[corporate | corporate]] [[professional | professional]] [[struggling | struggle]] with [[burnout | burnout]] and [[insomnia | insomnia]] [[implemented | implement]] [[digital | digital]] [[minimalism | minimalism]] [[techniques | technique]], [[such as | such as ~]] [[setting boundaries | set boundaries]] for phone usage and [[practicing | practice]] [[mindfulness | mindfulness]].
[[As a result | as a result]], he experienced improved sleep [[quality | quality]], [[reduced | reduce]] stress levels, and a [[newfound | newfound]] sense of calm and [[clarity | clarity]].

=== 고1 26.6모 – 39 ===
[[Approximately | approximately]] 15-20% of [[global | global]] greenhouse gas [[emissions | emission]] are caused by [[degradation | degradation]] and [[deforestation | deforestation]].
Trees [[play a | play a role in]] huge [[role in | play a role in]] the carbon cycle.
They [[convert | convert]] the CO2 in the air to oxygen through the [[process | process]] of [[photosynthesis | photosynthesis]], and [[consequently | consequently]], they are viewed as a natural [[regulator | regulator]] of carbon dioxide.
The existence of a larger amount of trees will [[no doubt | no doubt]] [[lead to | lead to]] the [[reduced | reduce]] [[presence | presence]] of carbon dioxide in the [[atmosphere | atmosphere]] and the increased existence of oxygen.
Unfortunately, [[deforestation | deforestation]] is [[preventing | prevent (~ from ...)]] this [[process | process]] [[from | prevent (~ from ...)]] being fully [[accomplished | accomplish]].
And with half of the Earth's forests gone, the amount of carbon dioxide is [[progressively | progressively]] [[rising | rise]].
With more carbon dioxide in the [[atmosphere | atmosphere]], more of the sun's [[radiation | radiation]] is being [[reflected | reflect]] back to Earth instead of being [[released | release]] into [[space | space]], and this is causing the planet's average temperature to [[rise | rise]].
[[Accordingly | accordingly]], [[deforestation | deforestation]] is a [[major | major]] [[issue | issue: [동] 문제, 이수; [명] 발행하다]] [[when it comes to | when it comes to ~]] global warming.

=== 고1 26.6모 – 41~42 ===
[[Commercial | commercial]] businesses [[aim for | aim for]] [[predictability | predictability]] and [[certainty | certainty]], [[especially | especially]] [[when it comes to | when it comes to ~]] product [[quality | quality]].
But [[predictability | predictability]] and [[certainty | certainty]] are not always [[valued | valued]] in the sporting world, [[especially | especially]] [[when it comes to | when it comes to ~]] the delivery of professional sport competitions.
From a [[spectator’s | spectator]] [[perspective | perspective]] the sport experience is better experienced when [[unpredictable | unpredictable]].
Sport events actually [[depend on | depend on]] that [[unpredictability | unpredictable]] [[in order to | in order toR]] [[attract | attract]] people to the game.
When the results of games cannot be predicted, [[attendances | attendance]] at sporting [[contests | contest]] are [[likely to | likely]] be higher, as are the [[profits | profit]] of leagues.
However, the [[lack | lack]] of [[predictability | predictability]] also [[leads to | lead to]] [[significant | significant]] [[variability | variability]] in the [[quality | quality]] of sporting [[performances | performance]].
Many [[factors | factor]] can [[contribute to | contribute (to ~)]] the [[variability | variability]] of the sport product, including the weather, player injuries, the venue, the [[quality | quality]] of the [[opponents | opponent]], the [[closeness | closeness]] of the scores and even the size of the crowd.
A cricket match can be [[exhilarating | exhilarating]], boring or even [[frustrating | frustrating]], but fans still have to pay the same price.
Sport [[marketers | marketer]] may [[attempt | attempt]] to [[overcome | overcome]] this by ‘[[improving | improve]]’ the product in [[systematic | systematic]] ways, [[such as | such as ~]] including a star player, [[offering | offer]] [[premium | premium]] seating or providing other [[forms | form]] of entertainment and inviting [[facilities | facility]].
The [[uncertain | uncertain]] nature of sport [[contests | contest]] is just one element of a total experience, although it is an important element for [[financial | financial]] [[success | success]].

=== 고1 26.6모 – 43~45 ===
Emma was a [[talented | talented]] [[vocalist | vocalist]] but [[struggled | struggle]] to gain [[recognition | recognition]].
Lisa, who went to the same high school with her, had quickly become famous with powerful [[performances | performance]].
Emma felt [[jealous | jealous]] watching Lisa’s [[success | success]].
One day, Emma decided to enter a [[major | major]] vocal [[competition | competition]] in the [[capital | capital]] city.
She spent months preparing her [[masterpiece | masterpiece]] of a [[performance | performance]], hoping this would finally be her [[opportunity | opportunity]] to shine.
When the [[competition | competition]] day arrived, Emma felt [[nervous | nervous]].
Walking into the concert hall, Emma saw a large [[audience | audience]] cheering for Lisa.
She [[couldn’t help but | can't help but]] [[compare | compare]] herself to Lisa.
On her turn, Emma performed [[with all her heart | with all one's heart]], [[pouring | pour]] her months of preparation into every note.
The [[judges | judge: [명] 심판, 판사; [동] 판단하다, 심판하다]] then [[evaluated | evaluate]] each [[vocalist’s | vocalist]] [[performance | performance]] carefully.
Finally, the results were [[announced | announce]].
[[To her surprise | to one's surprise]], Emma got first place, not Lisa.
[[Moments | moment]] [[later | later]], Lisa came over to [[congratulate | congratulate]] Emma with a warm smile.
She said, “Your hard work and [[dedication | dedication]] really [[paid off | pay off]].
I’m so happy for you.” She didn’t seem [[bothered | bother]] by the results.
“I’m proud that your singing brings joy to people,” said Lisa.
Emma felt [[grateful | grateful]] for Lisa’s kindness.
Lisa added, “I’ve always been [[moved by | moved by ~]] your effort and have been supporting you [[all along | all along]].”
These words made Emma feel [[embarrassed | embarrassed]] at her jealousy.
At the same time, she got [[inspired | inspire]] to find a better path forward.
They hugged warmly, their [[bond | bond]] [[strengthened | strengthen]].
From that day on, they [[supported | support]] each other and even sang on the same stage together.
Emma became more [[confident | confident]] and, finally, got a chance to have her [[solo | solo]] concert.

`;