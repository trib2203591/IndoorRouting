import { showNextRouteGuide, showPreviousRouteGuide, cancelRouteGuide } from "./routingGuide";

const routingGuidePanel = {
    panel: document.getElementById("routing-guide-panel"),
    nextBtn: document.getElementById("routing-guide-next-btn"),
    backBtn: document.getElementById("routing-guide-back-btn"),
    closeBtn: document.getElementById("routing-guide-close-btn"),
}

export function initRoutingGuideElements() {
    routingGuidePanel.nextBtn.onclick = () => {
        showNextRouteGuide();
    }

    routingGuidePanel.backBtn.onclick = () => {
        showPreviousRouteGuide();
    }

    routingGuidePanel.closeBtn.onclick = () => {
        cancelAndHideRouteGuide();
    }
}

export function cancelAndHideRouteGuide() {
    cancelRouteGuide();
    routingGuidePanel.panel.style.left = '-400px';
}
