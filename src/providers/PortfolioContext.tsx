import { createContext, useEffect, useState } from "react";
import {
  arrayEducation,
  arrayExperience,
  arrayInfo,
  arrayInterests,
  arrayKnowledge,
  arrayProjects,
  arraySkillLanguages,
  arraySkillTechnology,
} from "../data";
import { api } from "../services/api";
import { TFormContactSchema } from "../components/MainContact/FormContact/formContactSchema";

interface IInfo {
  id: number;
  type: string;
  value: string;
}

interface IProgress {
  id: number;
  type: string;
  value: string;
}

interface ISkill {
  id: number;
  type: string;
}

interface IResume {
  id: number;
  course: string;
  college: string;
  start: string;
  end: string;
}

interface IProject {
  id: number;
  name: string;
  languages: string[];
  description: string;
  repositoryLink?: string;
  siteLink?: string;
}

interface IPortfolioContext {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  firstPartInfo: IInfo[];
  secondPartInfo: IInfo[];
  arraySkillTechnology: IProgress[];
  arraySkillLanguages: IProgress[];
  arrayKnowledge: ISkill[];
  arrayInterests: ISkill[];
  arrayEducation: IResume[];
  arrayExperience: IResume[];
  projects: IProject[];
  languages: string[];
  handleLanguageClick: (item: string) => void;
  selectedLanguage: string | null;
  sendContact: (formData: TFormContactSchema, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>;
  changeMode: () => void;
}

interface IPortfolioProviderProps {
  children: React.ReactNode;
}

export const PortfolioContext = createContext({} as IPortfolioContext);

export const PortfolioProvider = ({ children }: IPortfolioProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [ projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    setProjects(arrayProjects)
    const allLanguages = new Set<string>();

    arrayProjects.forEach((project) => {
      if (project.languages) {
        project.languages.forEach((language) => {
          allLanguages.add(language);
        });
      }
    });

    setLanguages(Array.from(allLanguages));

    const mode = localStorage.getItem("@MODE");

    (mode === "ligth")
      ? setIsDarkMode(false)
      : setIsDarkMode(true)
  }, []);

  const changeMode = () => {
    setIsDarkMode(!isDarkMode)
    isDarkMode
      ? localStorage.setItem("@MODE","ligth")
      : localStorage.setItem("@MODE","dark")
  }

  const handleLanguageClick = (item: string) => {
    const filteredProjects = arrayProjects.filter((project) => project.languages.includes(item));

    if (selectedLanguage === item) {
      setSelectedLanguage(null);
      setProjects(arrayProjects);
    } else {
      setSelectedLanguage(item);
      setProjects(filteredProjects);
    }   
  };

  const sendContact = async (formData: TFormContactSchema, setIsLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setIsLoading(true);
      const { data } = await api.post("/1d1eaa0261e90c41c733ace05221339e", formData)
      console.log(data);

    } catch (error) {
      console.log(error);
      
    } finally {
      setIsLoading(false)
    }
  }
  

  const splitIndexInfo = Math.floor(arrayInfo.length / 2);
  const firstPartInfo = arrayInfo.slice(0, splitIndexInfo);
  const secondPartInfo = arrayInfo.slice(splitIndexInfo);

  return (
    <PortfolioContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        firstPartInfo,
        secondPartInfo,
        arraySkillTechnology,
        arraySkillLanguages,
        arrayKnowledge,
        arrayInterests,
        arrayEducation,
        arrayExperience,
        projects,
        languages,
        handleLanguageClick,
        selectedLanguage,
        sendContact,
        changeMode
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
