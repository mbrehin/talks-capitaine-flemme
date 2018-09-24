import React from 'react'
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  Slide,
  Text,
} from 'spectacle'
import CodeSlide from 'spectacle-code-slide'
import createTheme from 'spectacle/lib/themes/default'

require('normalize.css')

const images = {
  captain: require('./assets/capitaine-flemme.jpg'),
}

const examples = {
  package: './assets/package.json.example',
}

const theme = createTheme(
  {
    primary: '#44b1cd',
    secondary: '#ae0e5b',
    tertiary: '#ffffff',
    quarternary: '#CECECE',
  },
  {
    primary: {
      name: 'Advent Pro',
      googleFont: true,
      styles: ['400', '700i'],
    },
    secondary: {
      name: 'Droid Serif',
      googleFont: true,
      styles: ['400', '700i'],
    },
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['fade']}
          bgColor="secondary"
          bgImage={images.captain.replace('/', '')}
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
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Capitaine Flemme, c'est un peu comme Jean-Kevin, le fils du patron :
            quand il bosse sur un projet, on a peur qu'il casse tout…
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Il oublie souvent les conventions, les bonnes pratiques…
          </Heading>
          <Appear>
            <Text size={4} textColor="secondary">
              un peu comme tout le monde !
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Quand il arrive sur un projet, il ne sait pas quels outils
            installer, ni comment les configurer
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Heureusement on a VSCode
          </Heading>
          <Appear>
            <Text size={6} textColor="secondary">
              Gratuit, portable, puissant, configurable, extensible…
            </Text>
          </Appear>
          <Appear>
            <Text size={6} textColor="secondary">
              <Link
                textColor="secondary"
                href="https://code.visualstudio.com/docs/getstarted/settings"
                target="_blank"
              >
                avec ses recommandations d’extensions
              </Link>
            </Text>
          </Appear>
          <Appear>
            <Text size={6} textColor="secondary">
              <Link
                textColor="secondary"
                href="https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions"
                target="_blank"
              >
                et sa configuration par espace de travail
              </Link>
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            On a aussi{' '}
            <Code textColor="secondary" bgColor="primary">
              npm
            </Code>{' '}
            avec le{' '}
            <Code textColor="secondary" bgColor="primary">
              package.json
            </Code>{' '}
            du projet pour installer et configurer tout un tas de modules utiles
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            Quand il code, Capitaine Flemme devient souvent…
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              Capitaine goré !
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            Il se fait conseiller ou corriger par
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              ESLint, StandardJS et Prettier
            </Heading>
          </Appear>
          <Appear>
            <Text size={6} textColor="secondary">
              (pour le lint et le formatage)
            </Text>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">
              Git et son hook de pre-commit
            </Heading>
          </Appear>
          <Appear>
            <Text size={6} textColor="secondary">
              (relance du lint et du formatage, au cas où)
            </Text>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={4} textColor="primary">
            …il oublie des choses dans son code…
          </Heading>
          <Appear>
            <Text size={6} textColor="primary">
              (marqueurs de conflits, console.log(…), FIXME/TODO…)
            </Text>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">
              alors on l'aide et on interdit le commit grâce au hook de
              pre-commit Git
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={4} textColor="tertiary">
            …sauf que Git, quand on a pas lu la doc, ça n’est pas trivial !
          </Heading>
          <Appear>
            <Heading size={4} textColor="secondary">
              alors on simplifie avec npm et{' '}
              <Link
                textColor="secondary"
                href="https://www.npmjs.com/package/husky"
                target="_blank"
              >
                Husky
              </Link>
            </Heading>
          </Appear>
        </Slide>

        {/* <CodeSlide
          transition={[]}
          lang="json"
          code={examples.package}
          ranges={[
            { loc: [133, 134], note: 'npm install --save-dev kusky' },
            { loc: [79, 86], note: 'Renseignez les hooks désirés' },
            { loc: [82, 83], note: 'qu’il s’agisse de scripts à vous' },
            { loc: [81, 82], note: 'd’appel à une librairie tierce' },
            { loc: [83, 84], note: 'ou les deux' },
          ]}
        /> */}
        <CodePane
          lang="json"
          source={require('raw-loader!assets/package.json.example')}
        />

        {/* TODO: */}
        {/*
          Dernièrement il s'est mis à SVG…
          Il utilise des outils de génération parfois douteux produisant un SVG améliorable…
          Alors on a encore le hook de pre-commit qui va nettoyer tout ça avec SVGO (#TODO: ajouter lien)
        */}
      </Deck>
    )
  }
}
