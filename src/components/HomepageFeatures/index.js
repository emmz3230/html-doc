import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg")
      .default,
    description: (
      <>
        HTML, which stands for HyperText Markup Language, serves as
        the foundation of web development. It enables you to create
        interactive web pages, structure content, and effectively
        communicate your message.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg")
      .default,
    description: (
      <>
        HTML plays an essential role in web development as it defines
        the structure and content of web pages. It serves as the
        backbone upon which websites are built.
      </>
    ),
  },
  {
    title: "How to write HTMl",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg")
      .default,
    description: (
      <>
        Writing HTML code is a matter of understanding HTML tags. Tags
        are enclosed within angle brackets, each comprising an opening
        and closing part. They function as building blocks that define
        the structure of your web page.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
