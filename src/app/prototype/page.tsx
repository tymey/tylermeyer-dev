"use client"

import { useEffect, useState } from "react";

type CodewarsData = {
    language: string;
    count: number;
    completedChallenges: [string, string],
}[];

export default function Page() {
    const [codeWarsData, setCodeWarsData] = useState<CodewarsData>([]);

    const fetchCodeWars = () => {
        fetch("https://www.codewars.com/api/v1/users/tymey/code-challenges/completed?page=0")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! state ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                // console.log('Completed Challenges:', data);
                const langData = data.data.reduce((acc: { [key: string]: { count: number, completedChallenges: [string, string][] } }, curr: { name: string, completedLanguages: [string], id: string }) => {
                    curr.completedLanguages.forEach((lang: string) => {
                        if (!acc[lang]) {
                            acc[lang] = {
                                count: 0,
                                completedChallenges: [],
                            }
                        }
                        acc[lang].count++;
                        acc[lang].completedChallenges.push([curr.name, `https://www.codewars.com/kata/${curr.id}`]);
                    });
                    return acc;
                }, {});

                // console.log('Reformatted Data:', langData);

                const langArray = Object.getOwnPropertyNames(langData).map(lang => (
                    {
                        language: lang,
                        count: langData[lang].count,
                        completedChallenges: langData[lang].completedChallenges,
                    }
                ));

                setCodeWarsData(langArray);
            })
            .catch(error => {
                console.error("Error fetching Codewars data:", error);
            });
    };

    useEffect(() => {
        fetchCodeWars();
    }, []);

    return (
        <>
            <div className="flex items-center justify-center mt-20">
                {codeWarsData.map((lang, index) => (
                    <div key={`${index}-${lang.language}`}>
                        <h1 className="text-4xl">{`${lang.language.toUpperCase()}: ${lang.count}`}</h1>
                        {lang.completedChallenges.map((challenge, index) => (
                            <p><a href={challenge[1]} target="_blank" className="hover:underline">{` ${challenge[0]}`}</a></p>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
}