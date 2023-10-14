import type { APISpaceXResponse, Doc } from "../types/api";

const API_URL = "https://api.spacexdata.com/v5/launches/";

export const getRecentLaunches = async (): Promise<Doc[]> => {
    const query_url = [API_URL, 'query'].join('');
    const response = await fetch(query_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "desc",
                },
                limit: 12,
            }
        })
    });

    const { docs: launches } = await response.json() as APISpaceXResponse;
    return launches;
}

export const getOldLaunches = async (): Promise<Doc[]> => {
    const query_url = [API_URL, 'query'].join('');
    const response = await fetch(query_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: {},
            options: {
                sort: {
                    date_unix: "asc",
                },
                limit: 12,
            }
        })
    });

    const { docs: launches } = await response.json() as APISpaceXResponse;
    return launches;
}

export const getLaunchById = async (id: string) => {
    const url_by_id = [API_URL, id].join('');
    const response = await fetch(url_by_id);

    const launches = await response.json();
    return launches;
}

