import { createContext, useContext, useState } from 'react';

interface ProjectThumbnailState {
  /**
   * The current selected project thumbnail.
   */
  selectedThumbnail: string;
  /**
   * Function to select a new thumbnail.
   * @param thumbnail The new thumbnail.
   * @returns None.
   */
  setSelectedThumbnail: (thumbnail: string) => void;
}

const initialState: ProjectThumbnailState = {
  selectedThumbnail: '',
  setSelectedThumbnail: (_thumbnail: string) => {},
};

const ProjectThumbnailContext = createContext<ProjectThumbnailState>(initialState);

interface ProjectThumnailProviderProps {
  children: React.ReactNode;
}

const ProjectThumbnailProvider: React.FC<ProjectThumnailProviderProps> = (props) => {
  const { children } = props;
  const [selectedThumbnail, setSelectedThumbnail] = useState<ProjectThumbnailState['selectedThumbnail']>(
    initialState.selectedThumbnail
  );

  return (
    <ProjectThumbnailContext.Provider value={{ selectedThumbnail, setSelectedThumbnail }}>
      {children}
    </ProjectThumbnailContext.Provider>
  );
};

export const useProjectThumnbail = () => {
  return useContext<ProjectThumbnailState>(ProjectThumbnailContext);
};

export default ProjectThumbnailProvider;
