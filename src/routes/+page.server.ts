import { getProjects } from '$lib/server/project';

export async function load() {
    const response = await getProjects()
    return {
        projects: response
    };
}
