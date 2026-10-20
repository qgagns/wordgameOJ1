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

[CE_L4: 4과의 숲]
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



`;