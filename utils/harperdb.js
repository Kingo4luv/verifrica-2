export const harperFetch = async (body) => {
    const request = await fetch('https://cloud-1-kingo4luv.harperdbcloud.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${process.env.NEXT_PUBLIC_HARPERDB_KEY}`,
        },
        body: JSON.stringify(body),
    });

    return request.json();
};