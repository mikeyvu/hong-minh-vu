import React, { useMemo, useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import todoBotMock from '../assets/images/todo-bot-mock.png';

type MediaType = 'image' | 'video' | 'embed';
type EntrySection = 'personal-project' | 'professional-experience';

interface CareerEntry {
  id: string;
  section: EntrySection;
  date: string;
  title: string;
  company: string;
  previewImage: string;
  mediaType: MediaType;
  mediaSrc: string;
  demoUrl?: string;
  description: string[];
}

const careerEntries: CareerEntry[] = [
  {
    id: 'todo-bot-mern',
    section: 'personal-project',
    date: 'Apr 2026 - Present',
    title: 'Todo Bot (Full-Stack MERN)',
    company: 'Full Stack Software Engineer | Wollongong, NSW',
    previewImage: todoBotMock,
    mediaType: 'embed',
    mediaSrc: 'https://todo-bot-ut0r.onrender.com/',
    demoUrl: 'https://todo-bot-ut0r.onrender.com/',
    description: [
      'Strategically engineered to bridge the gap between enterprise Java ecosystems and the modern MERN stack, mastering reactive state management and non-relational data modeling.',
      'Accelerated frontend development and consistency by implementing a reusable, component-driven UI and modular styles.',
      'Optimized end-to-end data persistence through a flexible MongoDB/Mongoose schema, ensuring robust tracking of tasks and users.',
      'Designed a roadmap for AI-driven task prioritization using Retrieval-Augmented Generation (RAG) techniques.'
    ]
  },
  {
    id: 'sample-assist',
    section: 'professional-experience',
    date: 'September 2024 - June 2025',
    title: 'AI Engineer Intern',
    company: 'Sample Assist | Wollongong, NSW',
    previewImage: 'https://img.youtube.com/vi/g3BSYlM0fOM/hqdefault.jpg',
    mediaType: 'embed',
    mediaSrc: 'https://www.youtube.com/embed/g3BSYlM0fOM?si=i9biTTluKwjGW6TV',
    description: [
      'Researched and fine-tuned the PaddleOCR model to automate Patient Identity Verification, reducing manual data entry time by 80% for 10,000+ records and enabling more patients to receive treatment each day.',
      'Designed and generated synthetic datasets using GAN model to cover the lack of real data.',
      'Developed APIs for seamless integration of AI models into the company’s applications.',
      'Engaged with stakeholders to define project goals and align team direction.',
      'Collaborated in a 5-member Agile (Sprint) team to work and deliver the final product.',
      'Conducted comprehensive data analytics and assessed AI model effectiveness through accuracy, precision, recall, and F1-score.',
      'Tech Stack: Python, FastAPI, OpenCV, Google ML Kit, GitHub, PostgreSQL.'
    ]
  },
  {
    id: 'online-ordering-system',
    section: 'personal-project',
    date: 'Jan. 2025 - May 2025',
    title: 'Full Stack Software Engineer',
    company: 'Online Ordering System - Self Employed | Hanoi, Vietnam',
    previewImage: 'https://img.youtube.com/vi/Wyt5HsjooLg/hqdefault.jpg',
    mediaType: 'embed',
    mediaSrc: 'https://www.youtube.com/embed/Wyt5HsjooLg?si=C-Yvvj0YtYaNL9Z3',
    description: [
      'Built and deployed a full-stack online ordering and restaurant management system for a family business in Vietnam.',
      'Drove a 40% rise in revenue and cut manual processes by 30% through automation and real-time system integration.',
      'Enabled QR code table ordering with real-time order flow from customers to the kitchen.',
      'Delivered an admin portal to manage roles, categories, menu items, orders, and revenue reporting.',
      'Applied MVC design pattern and a normalized MySQL schema for clean separation of concerns and reliable data integrity.',
      'Built using Java and MySQL on the backend, with HTML, CSS, JSP, and JavaScript for the frontend interface.',
      'Maintained clean code, documentation, and version control using Git.'
    ]
  }
];

function Timeline() {
  const [selectedEntry, setSelectedEntry] = useState<CareerEntry | null>(null);

  const personalProjects = useMemo(
    () => careerEntries.filter((entry) => entry.section === 'personal-project'),
    []
  );

  const professionalExperience = useMemo(
    () => careerEntries.filter((entry) => entry.section === 'professional-experience'),
    []
  );

  const modalMediaUrl = useMemo(() => {
    if (!selectedEntry) return '';
    return selectedEntry.mediaSrc;
  }, [selectedEntry]);

  return (
    <div id="history">
      <div className="items-container">
        <section className="timeline-section">
          <h1 className="timeline-section-title">Professional Experience</h1>
          <VerticalTimeline>
            {professionalExperience.map((entry) => (
              <VerticalTimelineElement
                key={entry.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date={entry.date}
                iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <button
                  className="timeline-preview-card"
                  type="button"
                  onClick={() => setSelectedEntry(entry)}
                >
                  <img src={entry.previewImage} alt={`${entry.title} preview`} className="timeline-preview-image" />
                  <div className="timeline-preview-content">
                    <h3 className="vertical-timeline-element-title">{entry.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{entry.company}</h4>
                  </div>
                </button>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>

        <section className="timeline-section">
          <h1 className="timeline-section-title">Personal Project</h1>
          <VerticalTimeline>
            {personalProjects.map((entry) => (
              <VerticalTimelineElement
                key={entry.id}
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                contentArrowStyle={{ borderRight: '7px solid  white' }}
                date={entry.date}
                iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <button
                  className="timeline-preview-card"
                  type="button"
                  onClick={() => setSelectedEntry(entry)}
                >
                  <img src={entry.previewImage} alt={`${entry.title} preview`} className="timeline-preview-image" />
                  <div className="timeline-preview-content">
                    <h3 className="vertical-timeline-element-title">{entry.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{entry.company}</h4>
                  </div>
                </button>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </section>
      </div>

      <Dialog
        open={Boolean(selectedEntry)}
        onClose={() => setSelectedEntry(null)}
        fullWidth
        maxWidth="md"
      >
        <DialogContent className="career-modal-content">
          <IconButton
            aria-label="close"
            onClick={() => setSelectedEntry(null)}
            className="career-modal-close"
          >
            <CloseIcon />
          </IconButton>

          {selectedEntry && (
            <div className="career-modal-body">
              <div className="career-modal-media-wrapper">
                {selectedEntry.mediaType === 'image' && (
                  <img
                    src={modalMediaUrl}
                    alt={`${selectedEntry.title} media`}
                    className="career-modal-media"
                  />
                )}

                {selectedEntry.mediaType === 'video' && (
                  <video controls className="career-modal-media">
                    <source src={modalMediaUrl} />
                    Your browser does not support video playback.
                  </video>
                )}

                {selectedEntry.mediaType === 'embed' && (
                  <iframe
                    src={modalMediaUrl}
                    title={`${selectedEntry.title} media`}
                    className="career-modal-media"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>

              <h3>{selectedEntry.title}</h3>
              <h4>{selectedEntry.company}</h4>

              <ul className="timeline-description-list">
                {selectedEntry.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {selectedEntry.demoUrl && (
                <div className="career-modal-actions">
                  <a
                    href={selectedEntry.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="timeline-demo-button"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Timeline;