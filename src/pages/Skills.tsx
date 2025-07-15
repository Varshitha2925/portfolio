import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding: 3rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  width: 100vw;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url('https://grainy-gradients.vercel.app/noise.svg');
    background-repeat: repeat;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-align: center;
  background: linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #1a202c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(135deg, #e76f51 0%, #f4a261 100%);
    border-radius: 2px;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2.5rem;
  color: #4a5568;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const BubbleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const SkillBubble = styled(motion.div)<{ size: 'small' | 'medium' | 'large' }>`
  width: ${props => 
    props.size === 'small' ? '80px' : 
    props.size === 'medium' ? '100px' : '120px'
  };
  height: ${props => 
    props.size === 'small' ? '80px' : 
    props.size === 'medium' ? '100px' : '120px'
  };
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 3px solid transparent;
  background-clip: padding-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.1),
    inset 0 2px 4px rgba(255, 255, 255, 0.8);

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(135deg, #e76f51, #f4a261, #e9c46a, #2a9d8f);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: scale(1.15) translateY(-8px);
    box-shadow: 
      0 15px 35px rgba(231, 111, 81, 0.2),
      inset 0 2px 8px rgba(255, 255, 255, 0.9);
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: scale(0.95) translateY(-2px);
  }

  @media (max-width: 768px) {
    width: ${props => 
      props.size === 'small' ? '70px' : 
      props.size === 'medium' ? '85px' : '100px'
    };
    height: ${props => 
      props.size === 'small' ? '70px' : 
      props.size === 'medium' ? '85px' : '100px'
    };
  }

  @media (max-width: 480px) {
    width: ${props => 
      props.size === 'small' ? '60px' : 
      props.size === 'medium' ? '75px' : '85px'
    };
    height: ${props => 
      props.size === 'small' ? '60px' : 
      props.size === 'medium' ? '75px' : '85px'
    };
  }
`;

const BubbleIcon = styled.div<{ size: 'small' | 'medium' | 'large' }>`
  font-size: ${props => 
    props.size === 'small' ? '1.5rem' : 
    props.size === 'medium' ? '2rem' : '2.5rem'
  };
  margin-bottom: 0.3rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));

  @media (max-width: 768px) {
    font-size: ${props => 
      props.size === 'small' ? '1.2rem' : 
      props.size === 'medium' ? '1.6rem' : '2rem'
    };
  }

  @media (max-width: 480px) {
    font-size: ${props => 
      props.size === 'small' ? '1rem' : 
      props.size === 'medium' ? '1.3rem' : '1.6rem'
    };
    margin-bottom: 0.2rem;
  }
`;

const BubbleName = styled.h4<{ size: 'small' | 'medium' | 'large' }>`
  font-size: ${props => 
    props.size === 'small' ? '0.65rem' : 
    props.size === 'medium' ? '0.75rem' : '0.9rem'
  };
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  line-height: 1.1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: ${props => 
      props.size === 'small' ? '0.6rem' : 
      props.size === 'medium' ? '0.7rem' : '0.8rem'
    };
  }

  @media (max-width: 480px) {
    font-size: ${props => 
      props.size === 'small' ? '0.55rem' : 
      props.size === 'medium' ? '0.65rem' : '0.75rem'
    };
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FloatingBubble = styled(motion.div)<{ size: number; top: string; left: string; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left};
  opacity: 0.15;
  filter: blur(2px);
`;

const Skills: React.FC = () => {
  const allSkills = [
    { name: "React", icon: "⚛️", priority: "large" },
    { name: "JavaScript", icon: "🟨", priority: "large" },
    { name: "Node.js", icon: "🌐", priority: "large" },
    { name: "Python", icon: "🐍", priority: "large" },
    { name: "React Native", icon: "📱", priority: "medium" },
    { name: "TypeScript", icon: "🔷", priority: "medium" },
    { name: "MongoDB", icon: "🍃", priority: "medium" },
    { name: "Express", icon: "🚀", priority: "medium" },
    { name: "Flutter", icon: "🦋", priority: "medium" },
    { name: "AWS", icon: "☁️", priority: "medium" },
    { name: "Django", icon: "🎯", priority: "medium" },
    { name: "Docker", icon: "🐳", priority: "medium" },
    { name: "HTML5", icon: "🌐", priority: "small" },
    { name: "CSS3", icon: "🎨", priority: "small" },
    { name: "Firebase", icon: "🔥", priority: "small" },
    { name: "PostgreSQL", icon: "🐘", priority: "small" },
    { name: "REST APIs", icon: "🔗", priority: "small" },
    { name: "JWT", icon: "🔐", priority: "small" },
    { name: "Git", icon: "📝", priority: "small" },
    { name: "OpenAI API", icon: "🤖", priority: "small" },
    { name: "Machine Learning", icon: "🧠", priority: "small" },
    { name: "Stripe API", icon: "💳", priority: "small" },
    { name: "OpenCV", icon: "👁️", priority: "small" },
    { name: "ROS", icon: "🔧", priority: "small" },
    { name: "Linux", icon: "🐧", priority: "small" },
    { name: "Styled Components", icon: "💅", priority: "small" },
    { name: "NodeMailer", icon: "📧", priority: "small" },
    { name: "Robotics", icon: "🤖", priority: "small" }
  ];

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "backOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <SkillsSection id="skills">
      <FloatingElements>
        <FloatingBubble
          size={60}
          top="10%"
          left="5%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ 
            y: [0, -20, 0], 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <FloatingBubble
          size={40}
          top="70%"
          left="90%"
          color="linear-gradient(135deg, #f4a261 0%, #e9c46a 100%)"
          animate={{ 
            y: [0, 15, 0], 
            scale: [1, 0.9, 1],
            rotate: [0, -180, -360] 
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <FloatingBubble
          size={80}
          top="40%"
          left="85%"
          color="linear-gradient(135deg, #2a9d8f 0%, #264653 100%)"
          animate={{ 
            y: [0, -10, 0], 
            x: [0, 10, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <FloatingBubble
          size={35}
          top="20%"
          left="75%"
          color="linear-gradient(135deg, #e76f51 0%, #f4a261 100%)"
          animate={{ 
            y: [0, -25, 0], 
            scale: [1, 1.3, 1],
            rotate: [0, 270, 0] 
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <FloatingBubble
          size={50}
          top="80%"
          left="10%"
          color="linear-gradient(135deg, #264653 0%, #2a9d8f 100%)"
          animate={{ 
            y: [0, -15, 0], 
            x: [0, 20, 0],
            scale: [1, 0.8, 1] 
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </FloatingElements>

      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills Bubble
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Pop the bubbles to explore my technical expertise
        </SectionSubtitle>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <BubbleContainer>
            {allSkills.map((skill, index) => (
              <SkillBubble
                key={index}
                size={skill.priority as 'small' | 'medium' | 'large'}
                variants={bubbleVariants}
                whileHover={{ 
                  scale: 1.2,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { type: "spring", stiffness: 600 }
                }}
              >
                <BubbleIcon size={skill.priority as 'small' | 'medium' | 'large'}>
                  {skill.icon}
                </BubbleIcon>
                <BubbleName size={skill.priority as 'small' | 'medium' | 'large'}>
                  {skill.name}
                </BubbleName>
              </SkillBubble>
            ))}
          </BubbleContainer>
        </motion.div>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
