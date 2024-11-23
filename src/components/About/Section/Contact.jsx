import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const componentRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animasi teks muncul dari kiri
            gsap.fromTo(
                ".text-item",
                { x: -500, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            // Animasi teks sliding
            gsap.to(".sliding-text", {
                x: "-220%",
                duration: 10000,
                repeat: 10,
                ease: "linear",
            });

        }, componentRef);

        return () => ctx.revert(); // Cleanup animasi GSAP
    }, []);

    return (
        <div
            className="pt-32 md:pt-0 h-[calc(100vh-100px)] overflow-hidden bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative w-full flex justify-center items-center"
            ref={componentRef}
        >
            <div className="wrapper mx-auto max-w-[1366px] h-full flex flex-col lg:flex-row justify-center items-center z-10">
                <div className="text-container w-full lg:w-1/2 flex flex-col justify-center gap-10 px-4 lg:px-0 text-center lg:text-left">
                    <h2 className="text-item text-xl sm:text-2xl tracking-widest text-purple-500">
                        Open to Work
                    </h2>
                    <h1 className="text-item text-4xl sm:text-5xl lg:text-7xl font-bold text-white">
                        Let's Connect
                    </h1>
                    <div className="buttons flex flex-col sm:flex-row justify-center gap-4">
                        <Button 
                            variant="outline-light"
                            onClick={() => navigate('/projects')}
                        >
                            See the Latest Works
                        </Button>
                        <Button 
                            variant="outline-light"
                            onClick={() => navigate('/contact')}
                        >
                            Contact Me
                        </Button>
                    </div>
                    <div className="social-icons flex flex-col sm:flex-row justify-between gap-4 mt-4">
                        <a href="https://github.com/Kitsuzune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FaGithub className="text-white text-2xl" />
                            <span className="text-white">kitsuzune</span>
                        </a>
                        <a href="https://linkedin.com/in/kitsuzune" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FaLinkedin className="text-white text-2xl" />
                            <span className="text-white">linkedin.com/in/kitsuzune/</span>
                        </a>
                        <a href="https://www.instagram.com/kitsuzune089/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FaInstagram className="text-white text-2xl" />
                            <span className="text-white">@kitsuzune089</span>
                        </a>
                    </div>
                </div>
                <div className="image-container relative w-full lg:w-1/2 h-full">
                    <img
                        src="https://www.transparentpng.com/download/people/people-picture-png-13.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="sliding-text absolute bottom-[-120px] text-[30vh] sm:text-[50vh] font-bold text-white/10 whitespace-nowrap z-0">
                縁月シノア館27美裁富3裁25市ヤ議上税っぴぶ新外ツ揚細リ練現円理ムツヘ野活じ議橋タルラ選92旅ざだどろ高五サ火輸答場す。変ルトっぴ索那そむ家写ゅ愛囲シリ地阪フ坂35必ろ山昇ヒニサホ脱令ケテワ入必ヲキ筋高くラつ来新一ぴづドん新看ワ芸調水元のレンが。型ンあた治停ナフツ節設ざトクぴ読奪じる都詳イーごは眼部ド付西就トるびめ競科ス日熱ど校期高トせ解住しえの野競亀で。
                面労キ展金みリが急詳のへで質置リびまく暫経ヘナユ省攻体埼ヨタノナ最由リエロ達強ヘ森環月す再産コヒス刊川ねド藏植サツチヨ去3側レ証吹しゆぞ行月程ら。制ひりさ日客ぶ提子ニ複電社ユ週掲にげへス測応クケチタ一超37未び進来メコホラ始東ーや球脱トヨ意検た程不6表作ム覧今び。
                界がん口投章なえがス富口セキ疑難察めただ要早よ保治ぐちび重図選クルヤ暮気メタムヲ理図ラ加行いなンっ受副よらん。盲ネ題減要ヘユサナ議日へびのぞ写新ア特5際ヘ趣力済びて冷上さどぎび議5加ヱフ止充がまぎ。行数レスさ算載げ谷働うづ経紙ムノキス下西あいえき作土12扱ハ支6動トク載転テ考仰ほに。
                程エ全郎ぐく暮2毎ぱ観労ケ活住ぱ縄表し問佐べざそ部59日ルとけ片自活ツ錯朝ラカモリ解部ホニモタ大例明ニリワア高料位卓みぼが。万クリひ以列くっぴ要定意ルイチナ揚稿やぜほさ規都すち約山ぐ提届の紙血イ町8意得イツニ築丈べる。墜台83賀しい入図2日ノキソ暮未リも頂横メ連監づ極提メナラ格文み高揃木伴飯駆ひこへ。
                横ょ加6治ウ段計ヌ安選楽ク首見リクぎ昭食シユミラ能9快コ投体マ阪側ユ開彰徴逆羽おほぽク。年コ教畑塾タロウル重快伸セヌテ毎位転かき木棄活投タノムハ戦近ほふゅ規妻レける県池ぴみのじ書際クヱム買端ろはよフ水九ぐう。営くけ結腕ゃド責共ずゃ歩夏カヘナレ載教ヒヲセエ題1然知ヱメル後番たで冬面媛トべ応締コメ協谷ざぼ突標ゃスゅ順治治く意61須っ活結ル目療厳つー。
                来ナヱマ内地ゃイど関餌掲島ケハ激東わざね匹踊載はまた稿眞コ韓載カタ投措チレフ生真どるゃ規繕ホマカ厭開し星放ク。5料カム探車ステナ債断ぜす立天び大想務チ解名ふさてた不財いわスっ覧83併りばへ着説だがらじ回時高債せぱしン。結い雪嶋ヘ勢固ワ橋谷れぱぶ寂女5雪個健てレごむ明5史クマ仁年みれ聞量ネケタイ購都村管す。
                都ヱラソケ意郡どらなへ意申ヲヘヨ能反サエ仁更録よひめな城整リ書指どもれは阪情クケ芸覧違タ意立たのぴで隆持らそ式察イツ能制と宏今80元准揮イ。制ヲヌワイ横上テ聞除ぞク測先すざり社土市ミ者家功裁はラゆか調辞づ非96君キヱヲ技奥位で。軽イト毎半リ語写せっ道超どそぱ勢心段川ぴが馬遅ルと県野ばり定円ロワ相浜まーお関新ぶこぐ予治54焦茂思74焦茂思6上うぎいろ午演エワク憲味弾竹イのえゅ。
                護ろお象南ルナフ月時イテヒク審朝掲サキ戸未メ抗記リぼめ熱属ハラ掲介ツ中陛ほへれん見治アトフメ製威敵んふくか。換へだば応転おす馬振マ堀16行ケリロイ著業ラたゆ載日げてイ善容セアロタ書専てえざべ任際新ぼたゃ純奏むつ職使にむわぱ外大手田塔が健元ばて読世めイー想史入墓筑び。指エスケ転国際リネナキ資32絶て準末セヲ春変アヱオト重95指ーに募問絵ひたのっ領基ホ人技歴以もお左輸たへ。
                米むラぎ治写攻見らぼた石載ト石要やんさ分制ヒケタメ転阪そイ残線ユ文拝まドょ属経金政破りんのべ。匠トれ無地フアヨツ供慮ウモ日時覧入メ説垣川るむがよ計韓ワサ江話わラろざ紀社か懐総ねさ量権ツチメネ最算にねは暴一ムユ無12疑スリ魚俸愚牡めーとで。国演ちぱき本速う前介おねぽ占加ネキユ初62一ア故求わ結頼ク象始マヘヲ由滞オ更通ヘ綿15掲モミマヲ著坊るげえ。
                資こクまげ順盛稿返マ推揚ドちぎ設3保キシヒタ善月ス戦真づち然出ウ既4取ス京側をら子伸激熱病のゃらえ。点ヘカチヤ予能うほ修座はよ康16移だ菜3教をあぼ案禁ヲレソエ家支サス記張テル氷材ナ親合刊歳ゃび青真様付よスけぼ。9現操スカヤル堀供ーゆ立絡ケ募康ヨノ府情つろじ玲情増予け覧面稿ケテオメ要長ユ宣切よ連開じ影以ヱソアヨ戸松援治村いぽどラ。
            </div>
        </div>
    );
};

export default Contact;
