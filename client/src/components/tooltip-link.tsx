import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { Link } from 'react-router-dom';

interface TooltipLinkProps {
    to: string;
    icon: React.ElementType;
    tooltipText: string;
    isActive: boolean
}

const TooltipLink: React.FC<TooltipLinkProps> = ({ to, icon: Icon, tooltipText, isActive }) => {

    const baseClasses = "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8";
    const inactiveClasses = `${baseClasses} text-muted-foreground hover:text-foreground`;
    const activeClasses = `${baseClasses} bg-accent text-accent-foreground hover:text-foreground`;

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Link
                    to={to}
                    className={isActive ? activeClasses : inactiveClasses}
                >
                    <Icon className="h-5 w-5" />
                    <span className='sr-only'>{tooltipText}</span>
                </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{tooltipText}</TooltipContent>
        </Tooltip>
    )
}

export default TooltipLink