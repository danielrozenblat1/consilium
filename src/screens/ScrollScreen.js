import React from 'react';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import styles from './ScrollScreen.module.css';

const ScrollScreen = () => {
  const cards = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Revolutionary AI-powered platform that transforms how businesses operate",
      color: "#FF6B6B"
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Next-generation blockchain solution for secure digital transactions",
      color: "#4ECDC4"
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "Cloud-native infrastructure designed for scalable enterprise applications",
      color: "#45B7D1"
    },
    {
      id: 4,
      title: "Project Delta",
      description: "Innovative machine learning framework for predictive analytics",
      color: "#96CEB4"
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "Cutting-edge IoT ecosystem connecting smart devices seamlessly",
      color: "#FECA57"
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      {/* Before content */}
      <div className={styles.beforeContent}>
        <h1>Welcome to Our Projects</h1>
        <p>Scroll down to explore our innovative solutions</p>
      </div>

      {/* ScrollStack container */}
      <div className={styles.container}>
        <ScrollStack
          className={styles.scrollStackContainer}
          itemDistance={120}
          itemScale={0.04}
          itemStackDistance={40}
          stackPosition="30%"
          scaleEndPosition="15%"
          baseScale={0.85}
          rotationAmount={0}
          blurAmount={2}
        >
          {cards.map((card) => (
            <ScrollStackItem key={card.id} itemClassName={styles.cardWrapper}>
              <div className={styles.projectContent}>
                <div 
                  className={styles.colorAccent} 
                  style={{ background: card.color }}
                />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        <div className={styles.instructions}>
          <div className={styles.scrollIcon}></div>
          <span>Scroll to explore projects</span>
        </div>
      </div>

      {/* After content */}
      <div className={styles.afterContent}>
        <h2>Ready to Get Started?</h2>
        <p>Contact us to learn more about how these projects can benefit your business</p>
      </div>
    </div>
  );
};

export default ScrollScreen;