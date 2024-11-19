import React, { useState } from 'react';
import {
  Container,
  Text,
  Group,
  Chip,
  Flex,
  ScrollArea,
  Image,
  Card,
  Divider,
  Collapse,
  ActionIcon,
} from '@mantine/core';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { IconChevronDown } from '@tabler/icons-react';
import Laptop from '../assets/laptop.png';
import LaptopCode from '../assets/laptop_code.png';

export function Projects() {
  const [hoverProjImage, setHoverProjImage] = useState(Laptop);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  // Define skills and projects
  const skills = ['React', 'HTML/CSS', 'Javascript', 'C++', 'Matlab', 'R', 'Node.js', 'Git', 'Gitlab', 'Figma', 'GraphQL', 'Generative AI', 'Scikit Learn', 'Next.js', 'AWS', 'Kafka', 'Grafana', 'SQL', 'API Development', 'Unity', 'C#', 'Data Analysis', 'Blender', 'Perforce', 'Bash'];
  const projects = [
    {
        id: 'bloomberg',
        title: 'Software Engineer for Bloomberg',
        description: 'August 2024 - Present - New York, NY',
        skills: ['Python', 'C++', 'Hadoop', 'Grafana', 'Humio', 'Git', 'Kafka'],
        details: 
        `The market is one of the most fast moving and elusive systems on the planet. At peak hours, ticks come in at 300,000/sec. As a company which promises financial data, Bloomberg needs a
        way of establishing metrics on data latency and correctness. I am on the Market Data Latency and Correctness team, where we are building engines that calculate market latency end to end
        and estbalish personalized, measurable correctness algorithms. The insights generated from our team help to guide initiatives, cater SLOs, and address issues in the Bloomberg
        data pipeline, which forms a large portion of annual revenue.
        `,
    },
    {
        id: 'kelahealth',
        title: 'Software Engineer for Kelahleath Startup',
        description: 'June 2022 - June 2023 - Remote',
        skills: ['React', 'HTML/CSS', 'Javascript', 'Node.js', 'Next.js', 'Git', 'Plotly.js', 'Figma'],
        details: 
        `Every body is different. The more insights that doctors have on a patient, the more they can cater surgical procedures to the patient's speciic needs.
        At Kelahealth, I worked to create a surgeon dashboard, fed by a predictive analytics model, which displayed patient risks and procedure recommendations. The 
        dashboard was demo'ed at 11+ hospitals. Throughout, I worked to integrate customer feedback and ever-changing backend data schemas/structure to provide an efficient 
        backend and seamless and intuitive frontend experience reqired in such a high-stakes environmnet.
         `,
        link: 'https://www.kelahealth.com/',
        link_info: 'Startup Website'
    },
    {
        id: 'publicissapient',
        title: 'Software Engineer for Publicis Sapient ',
        description: 'Summer 2023 - New York, NY',
        skills: ['Python', 'GraphQL', 'Generative AI', 'Scikit Learn', 'Gitlab', 'Node.js', 'Next.js', 'AWS', 'Express.js', 'SQL', 'API Development'],
        details: 
        `Advertisements are ever-changing and must connect with every age, gender, location, and interest. At Publicis Sapient, I worked to create an advertisement dashboard powered by 
        generative AI, which would assist McDonalds marketing in the ad creation process. My responsibility was the backend, which included creation of the customer segments based on their 
        McDonalds profiles (gender, location, point value, buy frequency, etc.) and prompting of generative AI models to create advertisements based on the conjunction of customer segment and 
        local events (i.e. concerts, sports games, holidays, etc.). I additionally dseigned the API which fed the frontend dashboard. These results were presented at the end of the summer to 
        relevant Product Managers and staff. 
         `,
        link: 'https://www.publicissapient.com/digital-business-transformation?utm_source=google&utm_medium=paid-search&utm_campaign=BRAND_ALW_DBT_07.2024_Paid.Search_Google_Text_US_GEN_OF.NO&utm_content=BRAND_ALW_DBT_Brand_1&utm_category=Brand&OfferingFamily=OF.NO&utm_term=publicis%20sapient&gad_source=1&gclid=Cj0KCQiAi_G5BhDXARIsAN5SX7qvwFSg-Z0C-CWyJQlmx5DvYwJTK1MbV8b0xNVdqlJEBZK9ySY12S8aAjRgEALw_wcB',
        link_info: 'Company Website'
    },
    {
        id: 'connectomics_apl',
        title: 'Machine Learning, Connectomics, and Game Dev. at Johns Hopkins Applied Physics Lab',
        description: 'November 2021 - February 2023 - Laurel, MD',
        skills: ['Python', 'Data Analysis', 'Unity', 'C#', 'Data Analysis', 'Blender', 'Perforce', 'Neuvue'],
        details: 
        `To make a map of the brain and all of its neuronal connections (a connectome), researchers have begun using flood-filling computer vision models on electron microscopy images of sliced cortical segments 
        which produce continuous segments through space. However, these algorithms are prone to errors, so I worked to correct errors on the output of the algorithms through proofreading and use the Neuvue platform.
        Proofreading is tedious task, which requires lots of human input, and so my team sought to game-ify the process by wrapping the Neuvue platform in a game. Users play as an astronaut and fly through the "universe"
        to make paths, when in reality they are flying through 3D representations of electron microscopy images, and the paths they are making are continuous segments of dendrites and axons. Results pertaining to the
        Neuvue platform were published and presented in a symposium. 
         `,
        link: 'https://www.biorxiv.org/content/10.1101/2022.07.18.500521v1.full',
        link_info: 'Published Paper'
    },
    {
        id: 'upitt_neuroscience',
        title: 'Computational Neuroscience at University of Pittsburgh',
        description: 'Summer 2021 - Pittsburgh, PA',
        skills: ['Python', 'Kilosort', 'Phy', 'SpikeInterface', 'Data Analysis', 'Matlab'],
        details: 
        `Researchers know that when you learn a task, neurons exhibit adaptive behavior, modulations in their signals, throughout the learning process. This research sought to examine how
        neuron clusters are recruited in an auditory learning task in mice. We constructed computational models to understand relationships among neurons (i.e. are they a part of the same subspace). I worked 
        in Python and Matlab to create an analysis pipeline for dual-recorded electrophysiology data. This involved correcting for rig anomalies, consolidating waveforms, and visualizing and 
        interpreting their shapes and locations to determine their role within the learning task.`,
        link: 'https://www.insanallylab.com/research',
        link_info: 'Research Website'
    },
    {
        id: 'hillman_cancer_center',
        title: 'Bioinformatics at Hillman Cancer Center',
        description: 'Summer 2019 - Pittsburgh, PA',
        skills: ['Python', 'R', 'Bioinformatics', 'Data Analysis', 'Bash'],
        details:
        `Single cell RNA sequencing pipelines involve the identification of cell types (here in tumors), based on expression profiles obtained from the isolation and sequencing of RNA.
        Data analysis pipelines create reports that are helpful for researchers, but the normalization, PCA reduction, clustering, and visualization can be parameterized 
        in ways that skew results. In this project, I designed data analysis pipelines and modified normalization and visualization hyperparameters to examine downstream effects in the ultimate cell type results.
        I discovered that results are far from definitive, and depending on user input, potentially unique cell clusters could be consolidated. I completed this research beneath
        Dr. Uma Chandran and presented these results at a symposium at the Hillman Cancer Center.`,
        link: 'https://docs.google.com/presentation/d/1Y_CphhwORXQPazq8M5RzEFmtU8Dd3HCD4izj6ipaq1A/edit?usp=sharing',
        link_info: 'Google Slides'


    
    },
  ];

  // Filter projects based on selected skills
  const filteredProjects = selectedSkills.length
    ? projects.filter((project) =>
        project.skills.some((skill) => selectedSkills.includes(skill))
      )
    : projects;

  const toggleExpandProject = (id) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  return (
    <ScrollArea style={{ height: '100vh' }}>
      <Container size="md" style={{ padding: '2rem' }}>
        <Header />

        {/* Skills Filter */}
        <Flex style={{ justifyContent: 'space-between' }}>
          <Flex style={{ flexDirection: 'column' }}>
            <Text size="xl" weight={700} mb="md">
              Filter by Skills
            </Text>

            <Group>
              {skills.map((skill) => (
                <Chip
                  key={skill}
                  value={skill}
                  checked={selectedSkills.includes(skill)}
                  onChange={() => {
                    setSelectedSkills((prev) =>
                      prev.includes(skill)
                        ? prev.filter((s) => s !== skill)
                        : [...prev, skill]
                    );
                  }}
                >
                  {skill}
                </Chip>
              ))}
            </Group>
          </Flex>
          <Image
            src={hoverProjImage}
            width={125}
            height={125}
            onMouseEnter={() => setHoverProjImage(LaptopCode)}
            onMouseLeave={() => setHoverProjImage(Laptop)}
          />
        </Flex>

        <Divider my="xl" />

        {/* Projects List */}
        <Flex direction="column" gap="lg">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              shadow="sm"
              padding="lg"
              onClick={() => toggleExpandProject(project.id)}
              style={{
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                ':hover': { transform: 'scale(1.02)' },
              }}
            >
              <Flex justify="space-between" align="center">
                <Flex direction="column">
                  <Text size="lg" weight={600}>
                    {project.title}
                  </Text>
                  <Text size="sm" color="dimmed">
                    {project.description}
                  </Text>
                  <Text size="sm" mt="sm">
                    Skills: {project.skills.join(', ')}
                  </Text>
                </Flex>
                <ActionIcon
                  size="lg"
                  radius="xl"
                  style={{
                    transition: 'transform 0.3s ease',
                    transform: expandedProject === project.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <IconChevronDown size={24} />
                </ActionIcon>
              </Flex>

              {/* Expandable Section */}
              <Collapse in={expandedProject === project.id} mt="sm">
                <Divider my="sm" />
                {/* Add Link if Available */}
                <Text size="sm">{project.details}</Text>
                {project.link && (
                  <a style={{fontSize: '14px'}} href={project.link}>{project.link_info}</a>)}
              </Collapse>
            </Card>
          ))}
        </Flex>

        <Footer />
      </Container>
    </ScrollArea>
  );
}
