setTimeout(function () {

    /**
     * get video source
     */
    const video_src = document.querySelector('meta[property="og:video:url"]').getAttribute('content');

    /**
     * add new download button
     */
    var tool_download = document.createElement('a');
    tool_download.setAttribute('class', 'svd-download-button');
    tool_download.setAttribute('href', video_src);
    tool_download.innerHTML = '<i></i> Download';

    var tool_container = document.getElementsByClassName('tool')[0];
    tool_container.insertBefore(tool_download, tool_container.firstChild);

}, 3000);