import { useMemo } from 'react';
import ResponsiveColumns from '../../components/FlexGrid/ResponsiveColumns';

const mockOriginal10 = new Array(10).fill(1);
export default function ResponsiveDesign() {
    const records: { title: string; description: string; linkProp: { href: string; text: string } }[] = useMemo(
        () =>
            mockOriginal10.map((_, index) => ({
                title: `Test ${index}`,
                description: `Test ${index} Test ${index} Test ${index}`,
                linkProp: { href: '/', text: 'Home' }
            })),
        []
    );

    return (
        <div style={{background:'#EEE'}}>
            <div className="py-14 px-1" style={{ width: '1000px' }}>
                <h2 className="hidden lg:block font-semibold text-left md:text-left text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-display leading-none mb-6 xl:mb-8">Wrapper Width 1000px</h2>
                <ResponsiveColumns records={records} wrapperWidth={1000} />
            </div>
            <hr></hr>
            <div className="py-14 px-1" style={{ width: '100%' }}>
                <h2 className="hidden lg:block font-semibold text-left md:text-left text-3xl md:text-2xl lg:text-3xl xl:text-5xl font-display leading-none mb-6 xl:mb-8">Wrapper Width 100%</h2>
                <ResponsiveColumns records={records} />
            </div>
        </div>
    );
}
