export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-themeTextWhite animate-fade-in">
                What Our Users Say
            </h2>
            <div className="p-6 rounded-lg bg-themeGray/20 backdrop-blur-lg border border-themeGray/30 hover:shadow-lg hover:shadow-themeGray/50 transition-all duration-300">
                <p className="text-themeTextGray mb-4">
                    &ldquo;EmotiSync has completely transformed my daily routine. I feel more
                    balanced and energized!&rdquo;
                </p>
                <div className="flex items-center">
                    <div>
                        <h4 className="font-semibold text-themeTextWhite">Sarah J.</h4>
                        <p className="text-sm text-themeTextGray">Yoga Instructor</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
