document.addEventListener("DOMContentLoaded", async function() {
    const updateViewCount = async (action) => {
        try {
            const response = await fetch(`https://sy4azureresume-visitorcount.azurewebsites.net?action=${action}`, {
                method: 'POST',
            });
            const data = await response.text();
            console.log(data); // Log the response from the function
            return data; // Return the response data
        } catch (error) {
            console.error('Failed to update or retrieve view count', error);
            return null; // Return null in case of an error
        }
    };

    // Update the view count and then update the text on the webpage
    await updateViewCount('update');
    const count = await updateViewCount('retrieve');

    // Use the retrieved count to update the text on the webpage
    const visitorCount = count ? count.toString().padStart(4, '0') : '0000';
    const viewCountElement = document.getElementById('view-count');
    if (viewCountElement) {
        viewCountElement.textContent = visitorCount;
    }
});
