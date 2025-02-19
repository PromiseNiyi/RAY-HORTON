// References to document elements
const docEl = document.documentElement;
const track = document.getElementById('custom-scrollbar');
const thumb = document.getElementById('custom-thumb');

// Function to update the thumb's size and position based on the current scroll state
function updateThumb() {
  // Current vertical scroll position
  const scrollTop = window.pageYOffset || docEl.scrollTop;
  // Full viewport height
  const viewportHeight = docEl.clientHeight;
  // Height of the custom scrollbar track (90vh)
  const trackHeight = track.clientHeight;
  // Total scrollable height of the document
  const scrollHeight = docEl.scrollHeight;

  // Calculate thumb height proportional to the visible area relative to total content,
  // but scale it based on the track's height (with a minimum height of 30px)
  const thumbHeight = Math.max((viewportHeight / scrollHeight) * trackHeight, 30);
  // Maximum top value for the thumb within the track
  const maxThumbTop = trackHeight - thumbHeight;
  // Determine thumb's top position based on scroll position
  const thumbTop = (scrollTop / (scrollHeight - viewportHeight)) * maxThumbTop;

  // Update thumb styles
  thumb.style.height = thumbHeight + 'px';
  thumb.style.top = thumbTop + 'px';
}

// Listen for scroll and resize events to update the thumb accordingly
window.addEventListener('scroll', updateThumb);
window.addEventListener('resize', updateThumb);
updateThumb(); // Initialize thumb position on page load

// Optional: Implement dragging of the custom thumb to scroll the page
let isDragging = false;
let startY, startScrollTop;

thumb.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.clientY;
  startScrollTop = window.pageYOffset || docEl.scrollTop;
  document.body.style.userSelect = 'none'; // Prevent text selection during dragging
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaY = e.clientY - startY;

  // Use the track's dimensions for the drag calculation
  const trackHeight = track.clientHeight;
  const thumbHeight = thumb.offsetHeight;
  const maxThumbTop = trackHeight - thumbHeight;

  // Calculate the maximum scrollable distance for the page
  const viewportHeight = docEl.clientHeight;
  const scrollHeight = docEl.scrollHeight;
  const maxScrollTop = scrollHeight - viewportHeight;

  // Convert thumb movement (deltaY) into page scroll movement
  const scrollDelta = (deltaY / maxThumbTop) * maxScrollTop;
  window.scrollTo(0, startScrollTop + scrollDelta);
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    document.body.style.userSelect = ''; // Restore text selection
  }
});
