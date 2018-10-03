import React from 'react'
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  Link,
  Slide,
  Text,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import createTheme from 'spectacle/lib/themes/default'

import bgImage from './assets/capitaine-flemme.jpg'

require('normalize.css')

const examples = {
  gitHistory: require('./assets/examples/git-history.bash.example'),
  package: require('./assets/examples/package.json.example'),
  preCommit: require('./assets/examples/pre-commit.js.example'),
}

const notes = {
  accessibility: require('./assets/notes/accessibility.html.txt'),
  autodevops: require('./assets/notes/autodevops.html.txt'),
  coding: require('./assets/notes/coding.html.txt'),
  commitlint: require('./assets/notes/commitlint.html.txt'),
  goret: require('./assets/notes/goret.html.txt'),
  howto: require('./assets/notes/howto.html.txt'),
  intro: require('./assets/notes/intro.html.txt'),
  lint: require('./assets/notes/lint.html.txt'),
  preCommit: require('./assets/notes/preCommit.html.txt'),
  server: require('./assets/notes/server.html.txt'),
  team: require('./assets/notes/team.html.txt'),
  vscode: require('./assets/notes/vscode.html.txt'),
  weakness: require('./assets/notes/weakness.html.txt'),
}

const theme = adjustTheme(
  createTheme(
    // Colors
    {
      primary: '#44b1cd',
      secondary: '#505050',
      tertiary: '#ffffff',
      quaternary: '#ccc',
    },
    // Fonts
    {
      primary: {
        name: 'Raleway', //'Advent Pro',
        googleFont: true,
        styles: ['400', '700i'],
      },
    }
  )
)

const styles = {
  codeSlides: 35,
  codeTitle: 80,
  small: 45,
  lineHeight: 1.4,
  urlBig: 80,
}

Slide.defaultProps.viewerScaleMode = true

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        contentWidth="80%"
        contentHeight="80%"
        transition={[]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['fade']}
          bgColor="secondary"
          bgImage={bgImage}
          notes={notes.intro}
        >
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="primary"
            bgDarken={0.5}
          >
            Capitaine flemme
          </Heading>
          <Text margin="10px 0 400px" textColor="tertiary" size={1} fit bold>
            Du dév à la prod comme un fainéant
          </Text>
          <span
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: '-5.5em',
              margin: '0 auto',
              color: '#ddd',
              fontSize: '1.2em',
              textAlign: 'center',
            }}
            aria-label="Crédit image : leroimarcus"
          >
            © leroimarcus
          </span>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.team}>
          <Heading size={4} textColor="primary" lineHeight={styles.lineHeight}>
            Quand il bosse sur un projet, il préfère éviter de tout casser par
            erreur…
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              ou flemmardise !
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.weakness}>
          <Heading size={4} textColor="primary">
            Alors il a analysé ses lacunes :
          </Heading>
          <Appear>
            <Text textColor="secondary">
              Il ne sait jamais quels outils installer,
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              il ne connait pas ou oublie les conventions,
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              il ne se rappelle plus les bonnes pratiques,
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">il manque parfois de rigueur…</Text>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              Bref, il est comme tout le monde !
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.howto}>
          <Heading size={4} textColor="primary" lineHeight={styles.lineHeight}>
            Comment automatiser et améliorer son expérience de développement et
            la qualité du travail produit sans trop d'effort ?{' '}
            <span role="img" aria-label="ça donne matière à réfléchir">
              🤔
            </span>
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.coding}>
          <Heading size={4} textColor="primary">
            Il a besoin de fiabiliser l'écriture de ses développements
          </Heading>
          <Appear>
            <Text textColor="secondary">
              en automatisant certains mécanismes dans l'éditeur
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              et en partageant ceux-ci au sein du projet
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" notes={notes.vscode}>
          <Heading size={4} textColor="tertiary">
            Alors il utilise VSCode…
          </Heading>
          <Appear>
            <Text textColor="secondary">
              Gratuit, portable, puissant, configurable, extensible…
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              <Link
                textColor="secondary"
                href="https://code.visualstudio.com/docs/getstarted/settings"
                target="_blank"
              >
                propose des recommandations d’extensions
              </Link>
            </Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              <Link
                textColor="secondary"
                href="https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions"
                target="_blank"
              >
                et une configuration par espace de travail
              </Link>
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" notes={notes.npm}>
          <Heading size={4} textColor="tertiary" lineHeight={styles.lineHeight}>
            …et aussi{' '}
            <Code
              textColor="secondary"
              bgColor="primary"
              textSize={styles.codeTitle}
            >
              npm
            </Code>{' '}
            et le{' '}
            <Code
              textColor="secondary"
              bgColor="primary"
              textSize={styles.codeTitle}
            >
              package.json
            </Code>{' '}
            du projet pour installer et configurer les modules utiles en une
            commande
          </Heading>
          <Appear>
            <Text textColor="secondary" textSize={styles.small}>
              (en utilisant les <i>dev dependencies</i> pour bien faire)
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.goret}>
          <Heading size={4} textColor="primary" lineHeight={styles.lineHeight}>
            Quand il code, il devient souvent…
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              Capitaine goret !{' '}
              <span role="img" aria-label="v'là le cochon">
                🐷
              </span>
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" notes={notes.lint}>
          <Heading size={4} textColor="tertiary">
            Alors il se fait conseiller et corriger
          </Heading>
          <Appear>
            <div>
              <Text textColor="secondary">
                par ESLint, StandardJS et Prettier
              </Text>
              <Text textSize={styles.small} textColor="secondary">
                (pour la qualité et le formatage du code)
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            L’accessibilité, il connait…
          </Heading>
          <Appear>
            <Text textColor="primary">
              …mais pour la mise en œuvre, ça laisse à désirer{' '}
              <span role="img" aria-label="y’en a qui vont être fâchés !">
                😤
              </span>

               !
            </Text>
          </Appear>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="primary"
          notes={notes.accessibility}
        >
          <Heading size={4} textColor="tertiary">
            Alors là aussi il se fait un peu aider
          </Heading>
          <Appear>
            <Text textColor="secondary">dans l'éditeur, avec du lint a11y</Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              dans ses tests, avec axe (et puppeteer)
            </Text>
          </Appear>
          <Appear>
            <Text textColor="tertiary">
              Ça ne fait pas tout, mais mieux vaut peu que rien !
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.hooks}>
          <Heading size={4} textColor="primary">
            Quand il a fini d'écrire son code, il a besoin de fiabiliser le
            partage
          </Heading>
          <Appear>
            <Text textSize={55} textColor="secondary">
              en revérifiant la qualité de son code avant le commit
            </Text>
          </Appear>
          <Appear>
            <Text textSize={55} textColor="secondary">
              en garantissant des messages de commits clairs, concis
            </Text>
          </Appear>
          <Appear>
            <Text textSize={55} textColor="secondary">
              en s'assurant que l'accessibilité est acceptable
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Pour ça il utilise Git et ses hooks
          </Heading>
          <Appear>
            <div>
              <Text textColor="secondary">
                et il automatise et partage tout ça <br />
                au sein du projet avec{' '}
                <Code textColor="secondary" bgColor="primary">
                  npm
                </Code>{' '}
                et{' '}
                <Link
                  href="https://www.npmjs.com/package/husky"
                  target="_blank"
                >
                  <Code textColor="secondary" bgColor="primary">
                    husky
                  </Code>
                </Link>
              </Text>
              <Text textColor="secondary" textSize={styles.small}>
                (surcourche aux hooks Git)
              </Text>
            </div>
          </Appear>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="json"
          code={examples.package}
          textSize={styles.codeSlides}
          ranges={[
            {
              loc: [132, 133],
              note: 'Il l’installe en « dev dependency »',
            },
            { loc: [79, 86], note: 'puis renseigne les hooks désirés' },
            {
              loc: [82, 83],
              note: '…qu’il s’agisse de scripts internes au projet…',
            },
            { loc: [81, 82], note: '…d’appel à des librairies tierces…' },
            { loc: [83, 84], note: '…ou les deux' },
          ]}
        />

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.preCommit}>
          <Heading size={4} textColor="primary" fit>
            Du coup, s'il oublie des choses dans son code
          </Heading>
          <Text textColor="primary" textSize={styles.small}>
            (marqueurs de conflits, console.log(…), FIXME/TODO…)
          </Text>
          <Appear>
            <div>
              <Text textColor="secondary">il sera notifié des problèmes</Text>
              <Text textColor="secondary">
                et le commit sera éventuellement interdit
              </Text>
              <Text textColor="secondary" textSize={styles.small}>
                (grâce au hook de pre-commit)
              </Text>
            </div>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading textColor="primary" size={4} lineHeight={styles.lineHeight}>
            …et son historique de commits qui était souvent imparfait,
            brouillon, désordonné…
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary" lineHeight={styles.lineHeight}>
            …inexploitable{' '}
            <span role="img" aria-label="Oh My God! oh my god! oh my god!">
              😱
            </span>
          </Heading>
          <CodePane source={examples.gitHistory} textSize={30} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary" fit>
            …s’améliore, maintenant qu’il peut se faire aider
          </Heading>
          <Appear>
            <Text textColor="secondary">à la saisie, avec un assistant ;</Text>
          </Appear>
          <Appear>
            <Text textColor="secondary">
              après saisie, avec une vérification automatisée
            </Text>
          </Appear>
          <Appear>
            <Text textSize={styles.small} textColor="tertiary">
              (suivant une convention préalablement définie)
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" notes={notes.commitlint}>
          <Heading textColor="tertiary" size={4}>
            grâce à
            <Code
              textColor="secondary"
              bgColor="primary"
              textSize={styles.codeTitle}
            >
              commitlint
            </Code>
            et au hook de commit-msg
          </Heading>
          <Appear>
            <Text textColor="secondary">
              pour lui interdire le commit si le format du message saisi est
              incorrect
            </Text>
          </Appear>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="json"
          code={examples.package}
          textSize={styles.codeSlides}
          ranges={[
            {
              loc: [114, 115],
              note: 'Installé aussi en « dev dependency »',
            },
            {
              loc: [115, 116],
              note: 'avec la convention (« conventional changelog »)',
            },
            {
              loc: [21, 24],
              note: '…chargée pour commitlint…',
            },

            {
              loc: [81, 82],
              note: '…et Husky prêt à déclencher ça au commit-msg !',
            },
          ]}
        />

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            sinon, quand il est perdu{' '}
            <span
              role="img"
              aria-label="désemparé devant l'oubli des conventions, encore une fois…"
            >
              😫
            </span>
          </Heading>
          <Code
            textColor="secondary"
            bold
            bgColor="primary"
            textSize={styles.codeTitle}
          >
            git commitizen
          </Code>
          <Heading size={4} textColor="tertiary">
            peut l'assister dans sa saisie
          </Heading>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="json"
          code={examples.package}
          textSize={styles.codeSlides}
          ranges={[
            {
              loc: [119, 120],
              note:
                '« dev dependency » (pour utiliser `git cz` au lieu de `git commit`)',
            },
            {
              loc: [120, 121],
              note:
                'comme précédemment on utilise le « conventional changelog »',
            },
            {
              loc: [25, 30],
              note: '…qu’on charge pour commitizen',
            },
          ]}
        />

        <Slide transition={['fade']} bgColor="primary">
          <Heading textColor="tertiary" size={4} fit>
            Enfin, quand il est prêt à « pusher » tout ça,
          </Heading>
          <Text textColor="secondary">
            on vérifie que les tests d'accessibilité sont au vert{' '}
            <span role="img" aria-label="Houston, paré au lancement">
              👍
            </span>
            , sinon on invalide le push{' '}
            <span role="img" aria-label="Houston, on a un problème">
              👎
            </span>
          </Text>
        </Slide>

        {/* TODO: */}
        {/*
        Dernièrement il s'est mis à SVG…
        Il utilise des outils de génération parfois douteux produisant un SVG améliorable…
        Alors on a encore le hook de pre-commit qui va nettoyer tout ça avec SVGO (#TODO: ajouter lien)

      */}

        <Slide transition={['fade']} bgColor="tertiary" notes={notes.server}>
          <Heading size={4} textColor="primary">
            Voilà pour le confort autour de son expérience locale…
          </Heading>
          <Text textColor="secondary">
            …mais côté serveur on commence à voir des choses super sympa pour
            automatiser un max
          </Text>
        </Slide>

        <Slide
          transition={['fade']}
          bgColor="tertiary"
          notes={notes.autodevops}
        >
          <Heading size={4} textColor="primary">
            L’« auto devops » de GitLab, <br />
            et la magie opère{' '}
            <span role="img" aria-label="abracadabra">
              🧙‍
            </span>

             !
          </Heading>
          <Appear>
            <Text>Build</Text>
          </Appear>
          <Appear>
            <Text>
              Qualité du code, vulnérabilités,{' '}
              <abbr title="Static Analysis Security Testing">SAST</abbr>, tests…
            </Text>
          </Appear>
          <Appear>
            <Text>
              <abbr title="Dynamic Analysis Security Testing">DAST</abbr>
            </Text>
          </Appear>
          <Appear>
            <Text>Performance</Text>
          </Appear>
          <Appear>
            <Text>Déploiement auto. ou manuel : staging, production</Text>
          </Appear>
          <Appear>
            <Text>Monitoring automatisé</Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="primary">
            Ressources utiles
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading textColor="tertiary" size={4} lineHeight={styles.lineHeight}>
            Les slides
          </Heading>
          <Text textSize={styles.urlBig}>
            <Link href="http://bit.ly/capflem-slides" textColor="secondary">
              bit.ly/capflem-slides
            </Link>
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading textColor="tertiary" size={5} lineHeight={styles.lineHeight}>
            <Link href="https://bit.ly/capflem-code" textColor="tertiary">
              Le projet
            </Link>{' '}
            et son{' '}
            <Link href="https://github.com/mbrehin/capitaine-flemme/blob/master/README.md">
              <Code
                textColor="secondary"
                bgColor="primary"
                textSize={styles.codeTitle}
              >
                README.md
              </Code>
            </Link>{' '}
            détaillant l'essentiel des procédures de mise en place, ainsi que
            plein de liens utiles{' '}
            <span role="img" aria-label="Ouuuuhhiii qu'on est content">
              😁
            </span>

             !
          </Heading>
          <Text textSize={styles.urlBig}>
            <Link href="https://bit.ly/capflem-code" textColor="secondary">
              bit.ly/capflem-code
            </Link>
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Merci
          </Heading>
          <Text>
            <Link
              href="https://twitter.com/mbrehin"
              textColor="secondary"
              target="_blank"
            >
              @mbrehin
            </Link>
          </Text>
          <Text>
            <Link
              href="https://delicious-insights.com/"
              textColor="secondary"
              target="_blank"
            >
              delicious-insights.com
            </Link>
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Questions ?
          </Heading>
        </Slide>
      </Deck>
    )
  }
}

function adjustTheme(theme) {
  const {
    screen: { global },
  } = theme
  delete global.body.fontSize
  global.html = { fontSize: '2vmin' }
  return theme
}
