import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import type { CodeLine, ProjectEntry } from '../../data/portfolioData';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: ProjectEntry;
  onClose: () => void;
}

const TOKEN_CLASS: Record<string, string> = {
  keyword: styles.tokKeyword,
  string: styles.tokString,
  func: styles.tokFunc,
};

function CodeLineRow({ line }: { line: CodeLine }) {
  return (
    <>
      {line.map((tok, i) => (
        <span key={i} className={tok.type ? TOKEN_CLASS[tok.type] : undefined}>
          {tok.text}
        </span>
      ))}
      {'\n'}
    </>
  );
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);

    const scrollY = window.scrollY;
    const { body } = document;
    const prevBodyPosition = body.style.position;
    const prevBodyTop = body.style.top;
    const prevBodyWidth = body.style.width;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.width = '100%';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      body.style.position = prevBodyPosition;
      body.style.top = prevBodyTop;
      body.style.width = prevBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  return createPortal(
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={project.name}>
        <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className={styles.header}>
          <h3 className={styles.name}>
            {project.name}
            {project.status && <span className={styles.status}>{project.status}</span>}
          </h3>
          <p className={styles.tagline}>{project.tagline}</p>
          <div className={styles.badges}>
            {project.badges.map((b) => (
              <span key={b} className={styles.badge}>
                {b}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>Pipeline</div>
          <div className={styles.pipeline}>
            {project.pipeline.map((step, i) => (
              <div key={step.label} style={{ display: 'contents' }}>
                <div className={styles.pipelineStep}>
                  <div className={styles.pipelineStepLabel}>{step.label}</div>
                  <div className={styles.pipelineStepValue}>{step.value}</div>
                </div>
                {i < project.pipeline.length - 1 && <div className={styles.pipelineArrow}>→</div>}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>Abstract</div>
          <div className={styles.abstract}>
            <p className={styles.abstractText}>{project.abstract}</p>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionLabel}>Code{project.demo.kind !== 'none' ? ' + Demo' : ''}</div>
          <div className={styles.codeBlock}>
            <div className={styles.codeChrome}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>
            <pre className={styles.codePre}>
              {project.code.map((line, i) => (
                <CodeLineRow key={i} line={line} />
              ))}
            </pre>
          </div>
        </div>

        <div className={styles.demo}>
          <div className={styles.thumb}>{project.demo.thumbnailLabel}</div>
          <div className={styles.demoBody}>
            <div className={styles.demoTitle}>{project.demo.title}</div>
            <div className={styles.demoSubtitle}>{project.demo.subtitle}</div>
          </div>
          <a
            href={project.demo.ctaHref}
            target={project.demo.kind === 'clip' ? '_blank' : undefined}
            rel={project.demo.kind === 'clip' ? 'noreferrer' : undefined}
            className={styles.demoCta}
          >
            {project.demo.ctaLabel}
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default ProjectModal;
