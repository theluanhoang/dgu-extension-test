import useragent, { Details } from "express-useragent";

export const analysisUserAgent = (userAgent: string) => {
    const agent: Details = useragent.parse(userAgent);

    return `${agent.platform}, ${agent.browser}`;
};
