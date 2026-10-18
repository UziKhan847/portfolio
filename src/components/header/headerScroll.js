// The header bar and its title/subtitle must share one scroll range: if the
// bar starts shrinking before the text starts moving up, the bar's bottom
// edge overtakes the subtitle mid-scroll. Capped at a fraction of the
// viewport so short (e.g. landscape phone) screens still get a valid range.
export function getShrinkStart(vh) {
    return Math.min(300, vh * 0.3);
}

// The "|" divider sits at its final spot in the nav bar, so it only fades in
// over the last stretch, once the text has nearly arrived beside it.
export function getDividerFadeStart(vh) {
    return vh * 0.9;
}

// Scale and sideways movement finish here, before the text has finished
// rising, so the title has already shrunk and the subtitle has already moved
// beside it by the time they share a line — otherwise the still-large title
// sweeps over the subtitle.
export function getLayoutEnd(vh) {
    const start = getShrinkStart(vh);
    return start + (vh - start) * 0.75;
}
