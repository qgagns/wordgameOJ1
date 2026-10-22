// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "옥정고1",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_2_2_oj1",      // 학교별 독립 DB 분리 키 (연도_학기_차_학교학년)

    // 🎛️ [교사용 마스터 계정] 선생님만 아는 관리자 로그인 아이디/비밀번호
    adminId: "qlagn",          // 관리자 로그인 아이디 (기본: admin)
    adminPw: "0112",           // 관리자 비밀번호 (기본: 0000)
    
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









[irreg_verbs: 불규칙 동사의 늪]
# 제멋대로 모습을 바꾸는 동사 정령들이 서식하는 늪
drive (drove, driven): [동] 운전하다, 몰다
ride (rode, ridden): [동] 타다
write (wrote, written): [동] 쓰다
break (broke, broken): [동] 부수다
choose (chose, chosen): [동] 선택하다, 고르다
freeze (froze, frozen): [동] 얼다, 얼리다
speak (spoke, spoken): [동] 말하다
steal (stole, stolen): [동] 훔치다
get (got, got): [동] 얻다; ~해지다
forget (forgot, forgotten): [동] 잊다
begin (began, begun): [동] 시작하다
drink (drank, drunk): [동] 마시다
run (ran, run): [동] 달리다
shrink (shrank, shrunk): [동] 줄어들다
sing (sang, sung): [동] 노래하다
spring (sprang, sprung): [동] 튀어 오르다
swim (swam, swum): [동] 수영하다
take (took, taken): [동] 잡다, 가지다
shake (shook, shaken): [동] 흔들다, 흔들리다
mistake (mistook, mistaken): [동] 실수하다
blow (blew, blown): [동] 불다
fly (flew, flown): [동] 날다, 날리다
grow (grew, grown): [동] 자라다; 키우다
know (knew, known): [동] 알고 있다
throw (threw, thrown): [동] 던지다
withdraw (withdrew, withdrawn): [동] 철회하다
swear (swore, sworn): [동] 맹세하다
tear (tore, torn): [동] 찢다
wear (wore, worn): [동] 입다
show (showed, shown): [동] 보여주다
be (was/were, been): [동] 있다/이다
beat (beat, beaten): [동] 때리다
become (became, become): [동] 되다
bite (bit, bitten): [동] 물다
come (came, come): [동] 오다
do (did, done): [동] 하다
eat (ate, eaten): [동] 먹다
fall (fell, fallen): [동] 떨어지다, 넘어지다
forbid (forbade, forbidden): [동] 금지하다
give (gave, given): [동] 주다
forgive (forgave, forgiven): [동] 용서하다
go (went, gone): [동] 가다
hide (hid, hidden): [동] 숨다, 숨기다
lie (lay, lain): [동] 눕다
see (saw, seen): [동] 보다
bleed (bled, bled): [동] 피를 흘리다
feed (fed, fed): [동] 먹이다
lead (led, led): [동] 이끌다
meet (met, met): [동] 만나다
read (read, read): [동] 읽다
shoot (shot, shot): [동] 쏘다, 발사하다
sleep (slept, slept): [동] 자다
speed (sped, sped): [동] 속도를 내다
hear (heard, heard): [동] 듣다
dig (dug, dug): [동] 파다
hang (hung, hung): [동] 매달다, 걸다
stick (stuck, stuck): [동] 찌르다; 붙이다
strike (struck, struck): [동] 치다, 때리다
wake (woke, woken): [동] 깨우다
shine (shone, shone): [동] 빛나다, 광을 내다
win (won, won): [동] 이기다; 얻다
build (built, built): [동] 세우다, 짓다
lend (lent, lent): [동] 빌려주다
lose (lost, lost): [동] 잃다; 지다
send (sent, sent): [동] 보내다
spend (spent, spent): [동] (돈, 시간 등을)사용하다, 쓰다
deal (dealt, dealt): [동] 다루다; 거래하다
mean (meant, meant): [동] 의미하다
bend (bent, bent): [동] 구부리다
feel (felt, felt): [동] 느끼다
hold (held, held): [동] 잡다, 쥐다
keep (kept, kept): [동] 유지하다; 기르다
leave (left, left): [동] 떠나다; 남겨두다
bring (brought, brought): [동] 가져오다
buy (bought, bought): [동] 사다
catch (caught, caught): [동] 잡다
fight (fought, fought): [동] 싸우다
seek (sought, sought): [동] 찾다, 추구하다
teach (taught, taught): [동] 가르치다
think (thought, thought): [동] 생각하다
find (found, found): [동] 찾다, 발견하다
pay (paid, paid): [동] 지불하다
say (said, said): [동] 말하다
stand (stood, stood): [동] 서다
understand (understood, understood): [동] 이해하다
sell (sold, sold): [동] 팔다
tell (told, told): [동] 말하다
have (had, had): [동] 가지고 있다, 소유하고 있다
light (lit, lit): [동] (불을)켜다, 밝히다
make (made, made): [동] 만들다
sit (sat, sat): [동] 앉다
slide (slid, slid): [동] 미끄러지다
burst (burst, burst): [동] 터뜨리다
cost (cost, cost): [동] 비용이~가 들다
cut (cut, cut): [동] 자르다
hit (hit, hit): [동] 치다
hurt (hurt, hurt): [동] 다치게 하다; 아프다
put (put, put): [동] 두다, 놓다
set (set, set): [동] 놓다; 마련하다
shut (shut, shut): [동] 닫다, 잠그다
spread (spread, spread): [동] 펴다, 펼치다

[irreg_nouns: 불규칙 명사의 언덕]
# 제멋대로 모습을 바꾸는 명사 정령들이 서식하는 언덕
man (men): [명] 남자, 사람
woman (women): [명] 여자
child (children): [명] 아이, 어린이
person (people): [명] 사람
foot (feet): [명] 발
tooth (teeth): [명] 이, 치아
goose (geese): [명] 거위
mouse (mice): [명] 쥐
ox (oxen): [명] 황소
louse (lice): [명] 이(곤충)
sheep (sheep): [명] 양
deer (deer): [명] 사슴
fish (fish): [명] 물고기, 생선
species (species): [명] 종(생물 분류 단위)
series (series): [명] 연속, 시리즈
aircraft (aircraft): [명] 항공기
medium (media): [명] 매체, 대중매체
curriculum (curricula): [명] 교육과정, 커리큘럼
criterion (criteria): [명] 기준, 표준
phenomenon (phenomena): [명] 현상
crisis (crises): [명] 위기
basis (bases): [명] 근거, 기초
analysis (analyses): [명] 분석
hypothesis (hypotheses): [명] 가설
oasis (oases): [명] 오아시스
stimulus (stimuli): [명] 자극, 자극제
fungus (fungi): [명] 균류, 곰팡이
cactus (cacti): [명] 선인장

[irreg_ads: 불규칙 형용사/부사의 굴]
# 제멋대로 모습을 바꾸는 형용사/부사 정령들이 서식하는 굴
good (better, best): [형] 좋은
well (better, best): [부] 잘, 좋게
bad (worse, worst): [형] 나쁜
ill (worse, worst): [형] 아픈, 나쁜
badly (worse, worst): [부] 심하게, 나쁘게
many (more, most): [형] 많은 (셀 수 있는 명사 수식)
much (more, most): [형/부] 많은, 많이 (셀 수 없는 명사 수식)
little (less, least): [형/부] 적은, 적게 (양/정도)
far (거리) (farther, farthest): [형/부] 먼, 더 먼, 가장 먼
far (정도) (further, furthest): [형/부] 나아간, 더 나아간, 가장 깊은
late (시간) (later, latest): [형/부] 늦은, 더 늦은, 가장 최근의
late (순서) (latter, last): [형] (둘 중) 나중의, 후자의, 마지막의
old (나이) (older, oldest): [형] 나이 든, 더 나이 든, 가장 나이 든
old (서열) (elder, eldest): [형] 나이 든, 손위의, 가장 맏이의

`;