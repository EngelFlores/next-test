export async function getItems() {
  const baseUrl = "https://dps-dev-test.n.dps.sh/data.json"
  try {
    const res = await fetch(baseUrl, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Erro de status: ${res.status}`);
    }

    const data = (await res.json()).data;
    return data;
  } catch (error) {
    console.error("Erro ao buscar os dados do carrossel:", error);
    return error;
  }
}
