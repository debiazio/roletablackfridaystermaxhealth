import React, { useState, useEffect } from 'react';
import styles from './roleta.css';

const Roleta = () => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<{ code: string, title: string } | null>(null);
  const [showSpinButton, setShowSpinButton] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [thirdLayout, setThirdLayout] = useState(false);
  const [showRoletaContainer, setShowRoletaContainer] = useState(false);



  // Função para copiar o texto para a área de transferência
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => alert('Código copiado!'))
      .catch((err) => console.error('Erro ao copiar texto: ', err));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const successMessage = document.querySelector('.vtex-rich-text-0-x-paragraph--confirm-form-roleta');
      if (successMessage) {
        setShowRoletaContainer(true); // Exibe o container da roleta quando a classe aparece
        setShowSpinButton(true);
        setShowSidebar(true);
        clearInterval(interval);

        const formElement = document.querySelector('.vtex-flex-layout-0-x-flexRow--row-form-roleta');
        if (formElement) {
          (formElement as HTMLElement).style.display = 'none';
        }
      }
    }, 500);

    return () => clearInterval(interval);
  }, [hasSpun]);

  // Lista de prêmios fixos
  const prizes = [
    { code: 'BLACKENVELOPEG', title: 'Env. G' },
    { code: 'BLACKSELADORA', title: 'Seladora' },
    { code: 'BLACKFRETEOFF50', title: 'Desc. frete R$50' },
    { code: 'BLACKNECESSAIRE', title: 'Necessaire' },
    { code: 'BLACKDESC50', title: 'Desconto R$50' },
  ];

  // Regras de prêmios por data
const prizeRules: Record<string, { range: number[]; code: string }[]> = {
  '2025-11-10': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 45], code: 'BLACKFRETEOFF50' },
    { range: [46, 47], code: 'BLACKNECESSAIRE' },
    { range: [48, 49], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-11': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 45], code: 'BLACKFRETEOFF50' },
    { range: [46, 47], code: 'BLACKNECESSAIRE' },
    { range: [48, 51], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-12': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 44], code: 'BLACKFRETEOFF50' },
    { range: [45, 46], code: 'BLACKNECESSAIRE' },
    { range: [47, 50], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-13': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 43], code: 'BLACKFRETEOFF50' },
    { range: [44, 44], code: 'BLACKNECESSAIRE' },
    { range: [45, 46], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-14': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 45], code: 'BLACKFRETEOFF50' },
    { range: [46, 48], code: 'BLACKNECESSAIRE' },
    { range: [49, 50], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-15': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 44], code: 'BLACKFRETEOFF50' },
    { range: [45, 47], code: 'BLACKNECESSAIRE' },
    { range: [48, 52], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-16': [
    { range: [1, 40], code: 'BLACKENVELOPEG' },
    { range: [41, 45], code: 'BLACKFRETEOFF50' },
    { range: [46, 48], code: 'BLACKNECESSAIRE' },
    { range: [49, 52], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-17': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 28], code: 'BLACKNECESSAIRE' },
    { range: [29, 32], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-18': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 28], code: 'BLACKNECESSAIRE' },
    { range: [29, 30], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-19': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 28], code: 'BLACKNECESSAIRE' },
    { range: [29, 30], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-20': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 28], code: 'BLACKNECESSAIRE' },
    { range: [29, 30], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-21': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 33], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-22': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 36], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-23': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 33], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-24': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 34], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-25': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 33], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-26': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 38], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
  '2025-11-27': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 36], code: 'BLACKDESC50' },
    { range: [37, 37], code: 'BLACKSELADORA' },
  ],
  '2025-11-28': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 36], code: 'BLACKDESC50' },
    { range: [37, 37], code: 'BLACKSELADORA' },
  ],
  '2025-11-29': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 36], code: 'BLACKDESC50' },
    { range: [37, 37], code: 'BLACKSELADORA' },
  ],
  '2025-11-30': [
    { range: [1, 20], code: 'BLACKENVELOPEG' },
    { range: [21, 25], code: 'BLACKFRETEOFF50' },
    { range: [26, 31], code: 'BLACKNECESSAIRE' },
    { range: [32, 35], code: 'BLACKDESC50' },
    { range: [0], code: 'BLACKSELADORA' },
  ],
};


    // Pega a data atual no formato YYYY-MM-DD (ajustada para o fuso horário local)
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  })
    .split('/')
    .reverse()
    .map((part, i) => (i === 1 ? part.padStart(2, '0') : part)) // garante zero à esquerda no mês
    .join('-');

  //  const currentDate = '2025-11-30'; // força uma data que existe nas regras

  // Função que retorna o código do prêmio com base na data e número aleatório
  const getPrizeCode = (randomNumber: number): string => {
    const rules = prizeRules[currentDate as keyof typeof prizeRules];

    // Caso a data não esteja nas regras → probabilidade igual para todos
    if (!rules) {
      const equalChanceIndex = Math.floor(Math.random() * prizes.length);
      const randomPrize = prizes[equalChanceIndex].code;
      console.log(`${currentDate} - range (igual) - ${randomPrize}`);
      return randomPrize;
    }

    // Verifica dentro do range configurado
    for (const rule of rules) {
      if (randomNumber >= rule.range[0] && randomNumber <= rule.range[1]) {
        console.log(`${currentDate}  - número ${randomNumber} - range ${rule.range[0]},${rule.range[1]} - ${rule.code}`);
        return rule.code;
      }
    }

    // Caso não caia em nenhum range (falha de configuração)
    console.warn(`${currentDate} - número ${randomNumber} fora de todos os ranges`);
    return '';
  };

// Função principal da roleta
  const handleSpin = (): void => {
    if (!spinning && !hasSpun && prizes.length > 0) {
      setSpinning(true);
      setHasSpun(true);

            // Obtém o conjunto de regras do dia atual
      const rules = prizeRules[currentDate as keyof typeof prizeRules];

      // Calcula o valor máximo do range desse dia (ex: 35 no dia 30/11)
      const maxRange = rules ? Math.max(...rules.map((r) => r.range[1] || 0)) : prizes.length;

      // Sorteia o número dentro do range correto
      const randomNumber = Math.floor(Math.random() * maxRange) + 1;

      const prizeCode = getPrizeCode(randomNumber);

      // Ângulo do segmento de cada prêmio
      const segmentAngle = 360 / prizes.length;

      // Posição do prêmio sorteado
      const prizeIndex = prizes.findIndex((p) => p.code === prizeCode);

      // Ângulo necessário para alinhar o prêmio sorteado ao ponteiro
      const targetAngle = 360 * 4 - prizeIndex * segmentAngle;

      // Define a rotação final com alinhamento exato ao ponteiro
      setRotation(targetAngle);
      setSelectedPrize({ code: prizeCode, title: prizeCode });

      setTimeout(() => {
        setSpinning(false);
        setThirdLayout(true);
      }, 3000);
    }
  };



  return (
    <div className={styles.roletaContainer} style={{ display: showRoletaContainer ? 'block' : 'none' }}>
      <div className={`${styles.formularioRoleta} ${showSpinButton ? styles.oculto : ''}`}>
        {/* Conteúdo do formulário */}
      </div>



      <div className={styles.container}>
        {/* Div lateral */}
        {showSidebar && (
          <div className={styles.sidebar}>
            <img
              src="https://stermax.com.br/images_idealine/roleta-stermax/imagem-titulo-stermax.webp"
              alt="Título Roleta Prêmios"
              className={styles.titleImage}
            />

            <div className={styles.conteinerTextos2Layout}>
              <div className={styles.conteinerTextos2LayoutTKS}>
                <p className={styles.textoTituloSegundaTela}>
                  ROLETA DE PRÊMIOS
                </p>
                <p className={styles.textoSubtituloSegundaTela}>
                  {thirdLayout
                    ? <span style={{ color: '#ffffff', fontSize: '12px'}}>
                      Parabéns! Agora é com você:
                    </span>
                    : "Agradecemos o seu Cadastro!"}
                </p>
              </div>
              <div className={styles.conteinerTextos2LayoutChegou}>
                <p>
                  {thirdLayout
                    ? selectedPrize && selectedPrize.code
                      ? (
                        <>
                          <span style={{ color: '#2585C2', fontSize: '22px', textShadow: 'none' }}>
                            Copie o seu cupom:<br /> {/* Quebra de linha aqui */}
                            &nbsp; {/* Texto adicional com espaço não quebrável */}
                          </span>
                          <span
                            onClick={() => copyToClipboard(selectedPrize.code.toUpperCase())}
                            style={{ cursor: 'pointer', color: '#2585C2', textShadow: 'none', fontSize: '22px',fontFamily: 'Fraunces, sans-serif' }} // Estilo para indicar que é clicável
                          >
                            {selectedPrize.code.toUpperCase()} {/* Exibe o código do cupom */}
                            <ul className={styles.List}>
                  <li>Informe o código do cupom sorteado via Whatsapp.</li>
                  <li>Ou faça a compra diretamente aqui no site.</li>
                  <li>Preencha todos os dados para a compra, e o campo do cupom aparecerá na última etapa antes do pagamento.
                    Lembre-se de digitar em letras maiúsculas.
                  </li>
                </ul>
                          </span>
                        </>
                      )
                      : "GIRE NOVAMENTE" // ou uma mensagem apropriada
                    : "CHEGOU A HORA DE TESTAR A SUA SORTE"}
                </p>
              </div>
              <div className={styles.conteinerTextos2LayoutTorcendo}>
                <p className={thirdLayout ? styles.underline : ""}>
                  {thirdLayout ? "" : ""}
                </p>
              </div>
            </div>

            {/* Exibe a nova div somente no terceiro layout */}
            {thirdLayout && (
              <div className={styles.AgoraEhComVC}>


                {/* Botões de Compra */}
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => window.open('https://www.stermaxhomeandhealth.com.br', '_blank')}
                    className={styles.siteButton}
                  >
                    COMPRAR PELO SITE E GARANTIR O MEU PRÊMIO
                    <img src="https://stermax.com.br/images_idealine/roleta-stermax/icone-sacola-stxh.webp" alt="Ícone compra no site" className={styles.iconeSacola} />
                  </button>
                  <button
                    onClick={() => {
                      if (selectedPrize) {
                        window.open(
                          `https://wa.me/5541999710062?text=Olá, ganhei o cupom com o prêmio ${selectedPrize.code.toUpperCase()} na roleta, quero efetuar a compra e garantir meu prêmio`,
                          '_blank'
                        );
                      }
                    }}
                    className={styles.whatsappButton}
                  >
                    COMPRAR COM CONSULTORA E GARANTIR O MEU PRÊMIO
                    <img src="https://mfmgroup.vtexassets.com/assets/vtex.file-manager-graphql/images/033385b4-ec2e-4b80-b824-91b5d979c897___54e571574de08cf410c2541050bd7141.svg" alt="Ícone whatsapp" className={styles.whatsConsultoras} />
                  </button>
                </div>
              </div>
            )}

            {showSpinButton && !thirdLayout && (
              <div className={styles.spinButtonContainer}>
                <button
                  onClick={handleSpin}
                  className={`${styles.spinButton} ${selectedPrize ? styles.pulsatingButton : ''}`}
                  disabled={spinning || hasSpun}
                >
                  {spinning ? 'Girando...' : selectedPrize ? selectedPrize.code : 'Girar a Roleta'}
                </button>
              </div>
            )}
            <div className={styles.conteinerTextos2LayoutImgMera}>
              <p>*Imagens de prêmios meramente ilustrativas</p>
            </div>
          </div>
        )}

        {/* Div da roleta */}
        <div className={styles.wheelContainer}>
          <img
            src="https://stermax.com.br/images_idealine/roleta-stermax/pointer-stermax.webp"
            alt="Ponteiro"
            className={`${styles.pointer} ${spinning ? styles.pointerVibrate : ''}`}
          />
          <div className={styles.wheel} style={{ transform: `rotate(${rotation}deg)` }}>
            <img
              src="https://stermax.com.br/images_idealine/roleta-stermax/roleta-stermax.webp"
              alt="Imagem da roleta"
              className={styles.wheelImage}
            />
            {/* Distribuição circular dos prêmios */}
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={styles.segmentText}
                style={{
                  transform: `rotate(${index * (360 / prizes.length)}deg)`,
                }}
              >
                <span className={styles.segmentText}>{prize.title}</span>
              </div>
            ))}
          </div>
          {/* Aqui adicionamos o texto abaixo da roleta no terceiro layout */}
          {thirdLayout && selectedPrize && (
            <div className={styles.couponMessage}>
              <p>
                {/* Você <strong>GANHOU o CUPOM <span onClick={() => copyToClipboard(selectedPrize.code.toUpperCase())} style={{ cursor: 'copy' }}>
                            {selectedPrize.code.toUpperCase()}
                            </span></strong> */}
                Cupom válido nas compras acima de R$ 390 reais.
              </p>
              <p>Válido apenas um prêmio por CPF.</p>
              <p>Estoque de prêmios limitado, sujeito à disponibilidade no momento da compra.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roleta;
