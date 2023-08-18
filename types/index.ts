import { MouseEventHandler} from 'react'
export interface CustomButtonProps{
    title: string;
    styles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface CustomTitle {
    text: string
    float: string
}


export interface CustomServiceCardProps{
    title: string,
    text: string,
}

export interface CustomTechCardProps{
    image: string,
}

export interface CustomStepCardProps{
    index: number,
    text: string,
}

export interface CustomProjectPreviewCardProps{
    projectName: string,
    projectDesc: string,
    projectImage: string,
    route: string,
    id: number
}