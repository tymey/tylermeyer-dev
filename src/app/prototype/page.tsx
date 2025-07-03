"use client"

import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type CodewarsData = {
    language: string;
    count: number;
    completedChallenges: [string, string][],
}[];

export default function Page() {
    const [codeWarsData, setCodeWarsData] = useState<CodewarsData>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [expandedLang, setExpandedLang] = useState<string | null>(null);

    const toggleExpand = (lang: string) => {
        setExpandedLang(expandedLang === lang ? null : lang);
    };

    const fetchCodeWars = () => {
        fetch("https://www.codewars.com/api/v1/users/tymey/code-challenges/completed?page=0")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! state ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
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

                const langArray = Object.getOwnPropertyNames(langData).map(lang => (
                    {
                        language: lang,
                        count: langData[lang].count,
                        completedChallenges: langData[lang].completedChallenges,
                    }
                ));

                langArray.forEach(lang => {
                    lang.completedChallenges.sort((a: string[], b: string[]) => {
                        const challengeA = a[0].toUpperCase();
                        const challengeB = b[0].toUpperCase();
                        if (challengeA < challengeB) {
                            return -1;
                        }
                        if (challengeA > challengeB) {
                            return 1;
                        }
                        return 0;
                    })
                });

                langArray.sort((a, b) => {
                    const langA = a.language.toUpperCase();
                    const langB = b.language.toUpperCase();
                    if (langA < langB) {
                        return -1;
                    }
                    if (langA > langB) {
                        return 1;
                    }
                    return 0;
                })

                setCodeWarsData(langArray);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Codewars data:", error);
            });
    };

    useEffect(() => {
        fetchCodeWars();
    }, []);

    return (
        <div className="flex items-center justify-center mt-20">
            {
                loading ? (
                    <div className="flex items-center justify-center loader"></div>
                ) : (
                    <div className="w-full max-w-3xl mx-auto">
                        <h2 className="text-xl font-bold mb-4">CodeWars Challenges by Language</h2>

                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart
                                data={codeWarsData}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 0,
                                    bottom: 5
                                }}
                            >
                                <XAxis dataKey="language" />
                                <YAxis />
                                <Tooltip />
                                <Bar
                                    dataKey="count"
                                    fill="#4F46E5"
                                    // onClick={(entry) => toggleExpand(entry.language)} // Fix TypeScript error
                                />
                            </BarChart>
                        </ResponsiveContainer>

                        <div className="mt-6 space-y-4">
                            {codeWarsData.map((lang) => (
                                <div key={lang.language}>
                                    <button
                                        onClick={() => toggleExpand(lang.language)}
                                        className="text-left w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md font-medium"
                                    >
                                        {lang.language} Challenges {expandedLang === lang.language ? "▲" : "▼"}
                                    </button>
                                    {expandedLang === lang.language && (
                                        <ul className="mt-2 ml-4 list-disc text-sm">
                                            {lang.completedChallenges.map(([title, url]) => (
                                                <li key={title}>
                                                    <a
                                                        href={url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-indigo-600 hover:underline"
                                                    >
                                                        {title}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )
            }
        </div>

    );
}