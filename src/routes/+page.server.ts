export async function load() {
const response = await import('../../projects.json');
return {
    projects: response.default
};
}
