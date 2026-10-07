// ========================================================
// ⚙️ [학교 설정] 학교나 시험이 바뀔 때 여기만 수정하세요!
// ========================================================
const GAME_CONFIG = {
    schoolTag: "옥정고1",      // 부제 옆에 붙을 학교/버전명 (예: The Trial of EXAM · 덕정고2 ver)
    dbKey: "2026_mid"      // 학교별 독립 DB 분리 키 (다른 학교와 랭킹/계정이 안 섞임)
};


// 🌿 [정령의 세계 지도]
// 새로운 맵을 만들고 싶으면 그냥 [맵 이름]을 적고 아래에 단어들을 적으시면 됩니다!
// 이름 후보군: 숲, 나무, 식물, 정원, 골짜기, 자연
//            호수, 바다, 물, 강, 샘, 폭포, 섬, 
//            하늘, 바람, 구름, 산, 고원, 언덕, 별
//            유적, 신전, 사원, 도서관, 책, 고대, 교과서

const WORLD_MAPS_TEXT = `

[풍요와 도약의 고원]
boost	[동] 증대시키다, 북돋우다
escalation, elevation	[명] 상승
accelerate	[동] 가속화하다
facilitate	[동] 용이하게 하다, 촉진하다
foster	[동] 조성하다, 육성하다
stimulate, energize	[동] 자극하다, 활력을 불어넣다
amplify, augment, expand	[동] 늘리다, 증폭하다, 확대하다
proliferation	[명] 증식, 확산
heighten, reinforce	[동] 높이다, 강화하다, 보강하다
thrive	[동] 번영하다, 번성하다
outpace, outperform, surpass	[동] 능가하다, 앞지르다, 뛰어넘다
breakthrough	[명] 획기적 발전, 돌파구
abundance	[명] 풍부함
nutrient-rich	[형] 영양이 풍부한
resilience	[명] 회복력, 탄성
revitalize	[동] 소생시키다, 활력을 불어넣다
revival	[명] 되살아남, 부활
recreate	[동] 재현하다, 되살리다
restoration	[명] 복원, 복구
recover, restore, retrieve	[동] 되찾다, 복원하다, 회수하다
retrieval	[명] 인출, 회수, 되찾기
conserve, preserve	[동] 보존하다, 보호하다
preservation	[명] 보존, 보호
retain, sustain	[동] 유지하다, 지속하다
retention	[명] 보유, 유지; 기억력
safeguard	[동] 보호하다, 지키다
intact	[형] 온전한, 손상되지 않은
sustainability	[명] 지속 가능성
sustenance	[명] 자양물, 생계 유지
durable, enduring	[형] 내구성 있는, 오래 지속되는
permanent	[형] 영구적인
stabilize	[동] 안정시키다
standardize	[동] 표준화하다
optimized	[형] 최적화된
adequate	[형] 적절한, 충분한
competence	[명] 역량, 능력
competent	[형] 유능한, 적임의
adept	[형] 능숙한, 숙련된
versatile	[형] 다재다능한, 다용도의
ingenious	[형] 독창적인, 기발한
ingenuity, originality	[명] 독창성, 기발함
authentic, genuine	[형] 진정한, 진짜의
sincerity	[명] 진정성, 성실함
unpretentious	[형] 가식 없는, 소박한
plainness	[명] 소박함, 단순함
frugality	[명] 검소, 절약
invaluable, priceless	[형] 대단히 귀중한, 값을 매길 수 없는
of value, worth ~	[형] 가치 있는, ~할 가치가 있는
merit, selling point	[명] 장점, 매력, 주목할 점
captivate	[동] 사로잡다, 매혹하다
fascinating	[형] 매력적인
exquisite	[형] 정교한, 우아한
sophistication	[명] 정교함, 세련됨
masterpiece	[명] 걸작, 명작
acclaim	[명] 찬사, 호평; [동] 칭송하다
commendable	[형] 칭찬할 만한, 훌륭한
esteemed	[형] 존경받는, 존중받는
admiration, adoration	[명] 감탄, 존경, 흠모
stature	[명] 위상, 지위
contented, gratified	[형] 만족한, 만족스러워하는
overjoyed	[형] 매우 기쁜
self-actualization	[명] 자아실현
self-esteem	[명] 자존감
beneficial	[형] 유익한, 이로운
contribute to ~	[동] ~에 기여하다
contribution	[명] 기여, 공헌
compensate for	[숙] ~을 보완하다, 메우다
remedy	[명] 치료책, 해법; [동] 바로잡다
alleviate, mitigate	[동] 완화하다, 경감하다
mitigation	[명] 완화, 경감
moderate	[동] 완화하다, 조정하다; [형] 온건한, 적당한
substantial	[형] 상당한, 실질적인
crucial, indispensable, pivotal, vital	[형] 중대한, 결정적인, 중추적인, 필수적인
	
	
	
[결핍과 침식의 심연]	
aggravate, undermine	[동] 악화시키다, 약화시키다, 훼손하다
collapse, demolish, ruin	[동] 무너지다, 파괴하다, 무너뜨리다
collapse, destruction, ruin	[명] 붕괴, 파괴, 몰락
catastrophic, devastating, disastrous	[형] 대재앙의, 파괴적인, 처참한
extinction	[명] 멸종, 소멸
extinguish	[동] 끄다, 소멸시키다
vanish	[동] 사라지다
decline, diminish	[동] 감소하다, 줄어들다
decelerate	[동] 감속하다, 속도를 늦추다
deplete, exhaust	[동] 고갈시키다, 소진하다, 다 쓰다
depletion, exhaustion	[명] 고갈, 소진, 탈진
starvation	[명] 기아, 굶주림
deprivation	[명] 박탈, 결핍
scarcity, shortage	[명] 부족, 결핍
in short supply, inadequate, insufficient, scarce	[형] 부족한, 불충분한, 부적절한
cannot afford toR	[동] ~할 여유가 없다
hazard	[명] 위험; [동] 틀릴 셈치고 추측하다
fatal	[형] 치명적인
hazardous, perilous	[형] 위험한, 매우 위험한
severe	[형] 심각한, 가혹한
threatening	[형] 위협하는, 위협적인
pose a threat	[숙] 위협을 가하다
come under threat	[동] 위협을 받다
endanger	[동] 위험에 빠뜨리다
susceptible, vulnerable	[형] 취약한, 영향받기 쉬운, 상처받기 쉬운
pitfall	[명] 함정, 위험
obstacle	[명] 장애물
constraint, limitation	[명] 제약, 한계
burden	[명] 부담, 짐; [동] 짐을 지우다
disrupt	[동] 혼란에 빠뜨리다, 방해하다, 교란하다
disruption	[명] 중단, 혼란, 붕괴
suppress	[동] 억누르다, 억제하다
restrict	[동] 제한하다, 한정하다
compulsory, obligatory	[형] 의무적인, 강제적인
inflexible, rigid, strict	[형] 엄격한, 경직된, 융통성 없는
discourage, dissuade	[동] 단념시키다, 만류하다
disallow, outlaw	[동] 금지하다, 불법화하다
seal off	[숙] 봉쇄하다
isolate, sequester	[동] 격리하다, 고립시키다
isolation, sequestration	[명] 격리, 고립
solitary	[형] 고독한, 외딴
insular	[형] 편협한, 고립된
disband	[동] 해산하다
displace	[동] 쫓아내다
abandon, relinquish	[동] 버리다, 포기하다, 내주다
forfeit	[동] 몰수당하다, 상실하다; [명] 박탈
cease, halt, suspend, terminate	[동] 중단하다, 그치다, 멈추다, 끝내다
halt	[명] 중단, 정지
backfire	[동] 역효과를 낳다
futile	[형] 헛된, 소용없는
futility	[명] 무익함, 쓸모없음
fruitlessly, in vain	[부] 헛되이, 결실 없이
distort	[동] 왜곡하다
misguide, mislead	[동] 오도하다, 잘못 인도하다
misguided	[형] 잘못 이해된, 오도된
erroneously	[부] 잘못되게, 그릇되게
flaw	[명] 결함, 흠
superficial	[형] 피상적인, 겉으로 드러난
mediocre	[형] 평범한, 보통밖에 안 되는
shabby	[형] 초라한, 허름한
vulgarity	[명] 상스러움, 음란함
obsolete	[형] 구식의, 쓸모없게 된
dispensable, redundant	[형] 없어도 되는, 불필요한, 중복되는
undesirable	[형] 바람직하지 못한
worrisome	[형] 걱정스러운
insecurity	[명] 불안
helplessness	[명] 무력함
depression, melancholy	[명] 우울감, 우울
bitterness	[명] 쓴맛
anoxic	[형] 산소 결핍의
hypoxia	[명] 저산소증
deoxygenation	[명] 탈산소화
	

[혜안의 천문탑]	
perceive	[동] 인지하다, 인식하다
perceptual	[형] 지각의, 감각의
cognitive, intellectual	[형] 인지적인, 지적인
cognitive capacity, mental capacity	[명] 인지적 능력, 정신적 지적 수용력
conscious	[형] 의식적인
awareness, consciousness	[명] 자각, 인식, 의식
insight	[명] 통찰, 통찰력
contemplation	[명] 심사숙고, 명상
deliberate	[형] 의도적인, 신중한
mindset	[명] 사고방식, 마음가짐
reasoning	[명] 추론, 논리
dedicate	[동] 바치다, 헌신하다
anticipate	[동] 고대하다, 예상하다
assumption	[명] 가정, 추정
hypothesis / hypotheses	[명] 가설, 가설들
theorize	[동] 이론을 세우다
theoretical	[형] 이론적인
speculative	[형] 사색적인, 투기적인
concept	[명] 개념
abstract	[형] 추상적인
empirical	[형] 경험적인, 실증적인
analyze	[동] 분석하다
analysis	[명] 분석
evaluate	[동] 평가하다
appraisal, evaluation	[명] 평가, 감정
validation	[명] 검증, 확인
criteria (pl. criterion)	[명] 기준
decipher, decode	[동] 해독하다, 판독하다
interpret	[동] 해석하다
differentiate	[동] 구별하다, 구분 짓다
categorization	[명] 범주화, 분류
clarify	[동] 명확하게 하다
apparent, evident, obvious, self-evident	[형] 분명한, 명백한, 자명한
pronounced	[형] 두드러진, 뚜렷한
accentuate, emphasize	[동] 강조하다, 두드러지게 하다
identify	[동] 확인하다, 식별하다
identity	[명] 정체성
distinctive	[형] 독특한, 구별되는
distinctiveness	[명] 독특성, 차별성, 고유성
precision	[명] 정밀성, 정확성
elaborate	[형] 정교한, 공들인; [동] 정교하게 만들다, 상세히 설명하다
exhaustive	[형] 철저한, 소모적인
coherent	[형] 일관성 있는, 논리 정연한
perspective, viewpoint	[명] 관점, 시각
view through the lens of	[숙] ~의 관점에서 보다
tunnel vision	[명] 좁은 시야, 편향된 관점
subjective	[형] 주관적인
biased, prejudiced	[형] 편향된, 선입견이 있는
prejudice	[명] 편견, 선입견
inclination, predisposition, tendency	[명] 성향, 경향
cynical	[형] 냉소적인
skeptical	[형] 회의적인
critical	[형] 비판적인; 중대한
uncritical	[형] 무비판적인
illusion	[명] 착각, 환상
ignorance	[명] 무지, 무식
unfamiliarity	[명] 낯섦, 익숙하지 않음
unanticipated, unexpected, unforeseen	[형] 예상치 못한, 예측하지 못한
unintended	[형] 의도치 않은
inadvertently	[부] 의도치 않게, 부주의하게
coincidence	[명] 우연의 일치
randomness	[명] 무작위성
random	[형] 무작위적인
probable	[형] 가능한, 개연성 있는
unlikely	[형] ~할 것 같지 않은
inevitable	[형] 불가피한, 필연적인
inevitably	[부] 필연적으로
contradict	[동] 모순되다, 반박하다
paradoxical	[형] 역설적인
controversial	[형] 논란의 여지가 있는
questionable	[형] 의문스러운, 미심쩍은
assert, make a point	[동] 주장하다, 단언하다
statement	[명] 진술
allegory, metaphor	[명] 우화, 풍유, 은유
rhetoric	[명] 수사법, 미사여구
satire	[명] 풍자
satirize	[동] 풍자하다
prose	[명] 산문
visionary	[형] 선구적인; [명] 예지력 있는 사람
	
	
[격동과 질서의 광장]	
institution	[명] 제도, 기관
institutional	[형] 제도적인, 기관의
administrative	[형] 행정의, 관리의
municipal	[형] 지자체의, 시의
hierarchy	[명] 위계, 계층제
centralize	[동] 중앙 집중화하다
centralized	[형] 중앙 집중화된
decentralize	[동] 분권화하다, 탈중앙화하다
less centralized	[형] 덜 집중화된
regulation	[명] 규정, 규제
norm	[명] 규범, 기준
doctrine	[명] 교리, 신조, 정설
convention	[명] 관습, 관례
conventional, customary	[형] 관습적인, 전통적인, 통상적인
pass ~ down	[동] (지식·전통 등)을 물려주다, 전수하다
cultural heritage	[명] 문화유산
dynasty	[명] 왕조
dominant	[형] 지배적인, 우세한
dominate	[동] 지배하다, 우세하다
authoritative	[형] 권위 있는
steer	[동] 유도하다, 조종하다
manipulate	[동] 조종하다, 조작하다
conduct	[동] 수행하다; 전도하다; [명] 행동거지, 처신
discipline	[명] 훈육, 규율
disciplinary	[형] 훈육의, 규율상의
obedience	[명] 복종, 순종
conform	[동] 순응하다, 따르다
passive	[형] 수동적인
reprimand	[명] 질책, 징계; [동] 질책하다
punishment	[명] 처벌
autonomous	[형] 자율적인, 자주적인
autonomy	[명] 자율성, 자주성
initiative	[명] 진취성; 주도권, 계획
spontaneous	[형] 자발적인, 자연스러운
prioritize	[동] 우선순위에 두다, 우선시하다
precedence	[명] 우선, 우선권
allocate, reallocate	[동] 할당하다, 배분하다, 재할당하다
distribute	[동] 분배하다, 배포하다
distributed	[형] 분산된
disperse	[동] 분산시키다, 흩뜨리다
circulation	[명] 유통, 순환
logistics	[명] 물류, 유통 체계
procure	[동] 조달하다, 획득하다
commodity, merchandise	[명] 상품, 물품, 원자재
commercialization	[명] 상업화
corporate	[형] 기업의
monetary	[형] 통화의, 화폐의
vendor	[명] 노점상, 판매자
collaborative	[형] 협력적인
communal	[형] 공동체의, 공동의
bonding	[명] 유대, 결속
affiliated	[형] 소속된, 연계된
mutual	[형] 상호 간의, 공통의
equitable, impartial	[형] 공평한, 공정한
hospitality	[명] 환대
accord	[동] 부여하다; 부합하다; [명] 합의
engage with, interact with ~	[동] ~와 관계를 맺다, 상호작용하다
involvement	[명] 참여, 관여
interpersonal	[형] 대인 관계의
intimate	[형] 친밀한, 밀접한; 사적인
intervention	[명] 개입
rivalry	[명] 경쟁, 대항 관계
conflict, dispute	[명] 갈등, 분쟁, 논쟁
dispute	[동] 반박하다, 이의를 제기하다
animus, hostility	[명] 반감, 미움, 적대감
rejection	[명] 거부, 배척
disregard, neglect	[동] 무시하다, 소홀히 하다; [명] 무시, 태만
disclose	[동] 폭로하다, 밝히다
conceal, disguise	[동] 숨기다, 감추다, 위장하다
mimic	[동] 흉내 내다
mimicry	[명] 흉내, 모방
decoy	[명] 미끼, 유인물; [동] 유인하다
induce, prompt, provoke	[동] 유도하다, 촉발하다, 유발하다
prompt	[형] 신속한; [동] 촉진하다
persuade	[동] 설득하다
persuasive	[형] 설득력 있는
alter, modify	[동] 바꾸다, 수정하다, 변경하다
convert, transform	[동] 전환하다, 변형시키다
conversion, transformation	[명] 전환, 변형, 변화
transition	[명] 전환, 변천
substitute	[동] 대체하다, 대신하다; [명] 대체물, 후보
counterpart, equivalent	[명] 상응하는 것, 대응물, 맞먹는 것
correlation	[명] 상관관계, 연관성
consequence	[명] 결과
ascribe, attribute A to B	[동] ~의 탓/원인으로 돌리다
owing to	[숙] ~ 때문에
mechanism	[명] 기제, 작동 방식
dynamics	[명] 역학, 동력
interface	[명] 인터페이스, 접점
transmit	[동] 전달하다, 전파하다
transmission	[명] 전이, 전달, 전파



`;