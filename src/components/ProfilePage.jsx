import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Add this import

const ProfilePage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [specialties, setSpecialties] = useState('JavaScript, React, Node.js');

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditable(false);
    // Handle form submission logic
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="h-screen bg-gray-100 p-8">
      <div className="max-w-[105%] mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-teal-600">Employee Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Profile Image Section */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Profile Image</h2>
              <div className="flex justify-center mb-4">
                <img
                  src={profileImage || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXFxcaFxcYGRcYGBoYFxcXFxYXGBUYHSggGBolHRUVITEhJSktLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0lICUtLS0rLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAPcAzAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xABAEAABAwIEAwYDBQYGAQUAAAABAgMRACEEEjFBBVFhBhMicYGRMqHBFFKx0fAHI0Ji4fEVJDNykrKCQ1OiwsP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKxEAAgICAgIBAgYCAwAAAAAAAAECEQMhBBIxQVEiYQUTFHGBkbHRMlJi/9oADAMBAAIRAxEAPwC2vKT60AtsKrVp0KJpk0yAkk1iVQrxOAhMihWUEEWpgcYM0TImpHmQohQsKlsQr4q+tCbUIltRTJUTamHaJCQ3M0NhlygeVXF6BiLF3QUzFRtskQmLHesYxklci96MAUbH+9NsDX7NF9t68tlJNvrUsKnKZ6dalS2kJkC9Kx0QhIAjMffWts7kgZjHWIqNTCh4jodenWjEsk3m3p70AaNKdgnPAHT8a2TxReQ5l/j+jWuYiZHn1FCqOYQB/br1oAJaxLpuDPr86IHFHUiAJJ61jAMlKbX5eda4pBR4if6HlQFk7HHVoutMz5VC52kUpUBHlalj5zGT/atsGz4retKhoanjUC/4GthxZvWDO8zQDrJKj09orVYooLGrPHEg/DW7vF0G+WBSbDkTe49L9KZ459rupAB9Bf8AlFLomHYFxePDiheKbYZKQAe8tVZShJEpT8tuXnR/DMIHESbchfTf1pfloLZaXWGyAS4KKZ+zpEZhVMPDjN1GNrnTrWowwG5PIzqKOiDsPOCEKJ6VLjlqAI2vQPAVQVE0ZiXZBNU1sSEDYVmi9WJpByiTSZA8RNGYd1RIBNqTQ0a9oWZbmocAIR6UR2jbytjxTevcPSA3flVR8CZXMUrU6X+tGkTlMeX5VBjEyLDf660zcTlQAYny+dDEQuOEnQD862QiRcgc71ozlBOY39dPzrXEZYBST760DN8U0kZRmnpOtE4VwARHlp7UOnEAkEJ0Fza1eL5M+GPa3WhCJluCLDytp50Ihg3jc/Ot3WwNfXr1qVtiSCDtfXSmxmzDqkCT6308qW4/ElZk+31qxDhuaI9PLrSjH4PulQq/L8qSAVpuYP8AeiMOIUAn35CpcXlKU5UwdraedEYXDjL1+c/lTAjUrKqJ10/rQjqkib/35UbiG05Tm13/AKUsSm/6t1pAaZ/T6VOt8EARp8utajlH651lCOn9aAJ8M9Gg/vzorg+HKiozAnTrz8qgbQBfX60y4fhZvm1F43HIUAHtBsi53vrr+VD4h1Oawn8+VaraShUfnp061BiQJ3HlPz60xDDCsZBca1G8rW1HYl8Ei1A4pwEE1I6oiQ0Cmd63wTUqqDDuwmKZcOcSDegBd2kIyAda3wj3gA6VB2jcSrTnU7asrYttVITK/jnITIN5+ulGNsEgKVOaLD6edC4lvwhXUR72opWIXYxb11oYBLDUiSPxqDEGCIFjr0qU4hYTeL69KGxQkpgz+taQDAoSkQDqNJF+tYQnwyDPtehH8ApIBkmfL2rbGcWRhGkqsVqEpSY8I0BM2uZjynlRHYwhrh4jvHl5G5H+8hRyjKnzI11AO161XjmG4yOKUqJByjL8RGUA3CoGpOvKqfi+0KFyVrUpZOp0nQmNxaw211gEF/GSiBN5jRI873OukT85vqBeHO2qJ7tKrzdSYgRNtDa4uZNtqDceU4U+PvlXUucqAgQTeVQBAVBN/CbGqAcVkFh9L+Z3/Vq0Rxdab5yOg/PzocUNNe0dWw+Qg5gDlMGLieWYWJ8iamSgfEOXyrmnD+0ziVJ8QyiBBAAPKYHzq7cL4uH0nKtKiNQLSDpCNbb+YqKaBpeid8Zjp/br1qFpISoDWdP60YJiY/v+VbYLCZ1EqMDfzqiSZ1LSUZtz+opQy2qSdv1aieIpAXEyAb0wZxqYjLtc1km09gK1qPKPp0rDIVBMxy6UTikakafTnW2GIACYn69atjJmiCkHcfI7zWq1nYW6ijSykQdRvpfr6Vh1aZ59edOgs3xBvagsSqBTTuRFLnmZqRkGGQCRNN8KyJpehUECKZN2GagQo7Q4cJTPWs4dWZHO1Y7S4grSmBvWcMkhHpVR8A/JXnMy1ZNEzTdxYRCBr15UBiMwAKdZF/Wtw2p1Um0fr2obFQYcKtZCR6UzY4M6jxRm/W1SYVkpAKdfWsuccWg1yZOR1YNpGMdg3EAE77cqpHGOAv4zGqQgeERfZKQAAD7R6Grzi8U48kKAmKccAbCGAoDxOEqUddSY12i8dTUYc73ZriXedFFY/ZXHxOD0rC/2dIQZzzbeK6O6VxSnFPmYM1t+YzsWGPwUbE9im0oUtSzAGp36VzXjDaUrKU6CuodsuJqy5RYRtXK8dmJuJrfE20c2eKT0DtnrVi7NY5bbqFhQ8M2IgeIEXgaSarkRramXDMSULSfTQaGx16VoznT2dJwXHSs904i8ESPDcazqYmRGtjTpHD1FOcKy201FrG+/nXKlcSKFKygSDc6nWVHqT9TVo7IcYW+FhThMRAJsAZn5mpaKdNDx3DgnLN6JaYKBAM8uvnXmsMFGZ/v+VFpYkG/mb67R0qfYgXDNFSoJ8O19Ty8qIdY1KT5dTy8qiUkg3OusbeVGZD5Wv0H50wImXfD1+v3aFWsE6enLpRbk3j16Dn50GhrmY/WtIB2HSqRFL3jlNENPyCaGxOJSTa9IZNhk5r17EKI8qhYevFGPLATek3oEBrxCYgi9AOYxVxFacVOVINYagpM8qqPgTBMS8ChIM6irPwLAtkZiKq7kQgk/xCrjgH05RBGlRkutDQzxKSkDLAFIO0qEJSMolZ/UmjHF5lQVWpf2heSnLBFY/lp+SXFAvD8U82gk/CdJ6VasHxhnu0pQpKihKQqDMKCRM+s1zrF8XUvwTAFe4ZhXV4hkMhHiUhLm2ZM+NSucJk1Kw9fBtx2oyGfHv2guhwoZaBA1WrT2oPB9sXF2cShXVNiOl7Gsca7OlTjndyRJ0r3C+zPiBKALzuTP0HlV9o0dbjPsTYhaXNrEaGqJ2iwPdOeH4TXUXuGBN4qqdp8AFkGbgH+lGKf1CzQbiVPh/BO+Gdag22k+JREk7AITuSbXIG9O+Ldlgw13zBcBbhSw5lMokSpKkJHw2JSQbTe0U2+xlLKe7OhQMsA72IB1vFvOmXajElGBdLkFRaKAQInvChItsfGr2NU8knJUSsMOrv4OW8Rfla/M3O4MGfWrZ+zzBKWXCAIgRHKTPv8ASq3geHqxCkoH/krkNP15V0bgOF+zA5VEyALwIAkgADqSa3nJLRxIbOs93ci/6tW+HZcUJAt66cqi/wATMwRNFtcYUkQBWNu7AXlJChGoNhemrLx+HLfb+tA/boVmi9ZZ46c05aOzCkF4hlaEzl1oVoOAWTaiXOPKVYi1aJ40eVJthRZf8BRQ47NImasxRWvdmmWVZ3s3eQaif7PrNpq3ZDWwTTA5n2l4a4lCZG9CdwoJ02q99sGh3Q8x+NKnmf3ZttVx8EsoOJw6oQSLFQq68NwqcqR0qscR4yhYQzlghQn0q08PQImdqU3VCRM7g0iarPaHCXF6tOHCVSJvVc7U4QhQvUgVd5gA1Z+wrYS4464uEoRlHPMvceiVe9VcyZvRnCZDgCpKFWUmSJB6jkb02nRWKSU02W1OMQmVJIgnTenDmIATMXrl3BEpZeK1NEJkEC+1wTOvrVsb7QtuqCQCCawljfo9SOWL8hWNeJmqjxp6Pw/G9PeKv5bTFVXFvSbnp+v1tTxx9mOafoccDfRKS4pIy3GaQMyZHkTrY0o/aBxUOpCW5yAgknVStJ6JEmB1NQMPBXhqHi2FlsirSqdmbk3CiDsWZWUgiSJje34i9Xz7JO9cgwj6kLSpBhSVWPl+jXYMK6l1lLjZNwMwJtm3A31rXIq2csISnfX0R/Yr61q4wQoXrHizRNEHCEkGaggjVh+tafYetFFjrQqVKJImgRAGlSRNe7hXOjEYbeaidSQdadDOz9zWCwajOOR94Vj/ABFH3hTpFbJCya8GTUR4ij7wqFfF2x/EKKQ9gXajDktC24/GlWJSO7N9uf508e4w0bFQ96VcQxjCkkFQvTFRVe0fDWksNrSBmzJvvfWpeHu/wnSKQ8dbMgJdlCTIFFcHxAWLG4pPYeBsgQVFOtVXtHi3CbmrdgsGognnVS7SMKCooiSxCh81OxiSNKHy3qbCYda1ZUJKjyAmrCvgZrS2EtFTRcLgPiUVG4URlCZiwAvTHieBQ20FpQELTcEAC/IxrQXES7hWW0qFpJkfCFE6ZhvEdDaq1xjj7jlsxIgeVZ9W2dkpuK6yWwrG8XK9Teb0qxGJvQTDa13SJ67e9HMcPjW5qnUTJNyCOEgk5jvTbFi1Q4JmK14u/kbUd4t57Vi9yNlqJTlp8SiPvGPeugdlXSnDoTJvJsY1Ot6oeFZK1pQNzf8AEn2q4IGiRYCB6Ct83ii+Bjbbn/BZhlKpSqT+vnRTjhAmlGEbSm+cTHkbUa8lSiQkzciBJIgA3EaXF6hbL53DlF94ryCYjFrrdeLOUQIqBxCtDULz2gpnmDJTpiZoFeNvc1vJilrkTQgFKeIPf+65/wAlfnRDWKdOq1/8j+dZb4e4dEH2opOAcj4DT7IVmhxDn31f8jUQfXPxK9zRhwDn3DW7XDXPuGjsgtAHernU+5rVa1/eV7mmZ4a592oV8NcO1HdC7IXKcUdz7067LuFJNAr4W4KM4WyttUnSjvEOyOicMxnguKrPajFIK6sPD8UlTe1V7jeFSHO8+6CQOu35+gpRVlpW9FbbZHekZgkJTndcIByDZKAbFZ1kgwNBVw4SYRlSnLOo3vpmO6tzy02NVHhqS6UwJAKVr6qEJbb9VCT0SauDuJbwyRnUkKP3iE3O9zf0FPK6+lHrfhuGNPJL+P8AZnj2OCGyjbcbVyDiuL/e5kwAQoWEC0nSrlxviHeAhs5id0kKkcgJA94qkcYw5bsdbmOUi4nfQ0YY9WV+JyUopR8Ly/uadmsf3bmQ/Cv5K2P66Vcckm1c7UnerpwbHZmwSbxSzR9nm4ZemN20VXu0uJuEDzP0p4cVCCo7VUFJU8snncnkKnFHds0zS11XsO7PM/E6fJP1+nzp/gmibmgsM2EpQgaCm+FbtFLI7Z7HFw9MaRNh2CVA9YHvf5UJhuKqC1KBgKUoieVkgjzCQfWi+IYnu2lRrBA/3KhIPzJquNucv1FaYV7Of8VyOHWCe/JamMYlQSDYzcxIM8x9dagdwxUSUXAJkbwNxzHzG4G6tl086Kw/E4sDvNrGRyOoNayijyIvu6YW8Tl0oEME0+wuKDqSI/eAE2AGccwBoobga6jlSpSqxQZMUoOmbt8bWdAKw5xtwbJqbD4LDRdfzon7Hg/vA+tYdofBz2hartE4dhUR7Qu9KYFjBg61lTWDPKncf+oa+AAcYdVuK2Xi1x8VMMmDG4qB1/CijtH4C18AasWqNaEcxqudGqx7WgT8qj+0t/d+VO//ACF/YsXZlWZoyb0J2idKUpEz8U+tvypezxQoHhFS8bez5k/xJMGN+o9K0jJ3tHfwoxmpJ+fRWW8W6gZW3FIkqnKYJ1Iv60jOHUe8U4pS1DLdRKjeZMn0qwIT+NQP4eS4OaJrRyR0Q4zap+gHDulhYTMJciehTOVXkMyvQneheMvEqIPt1vNN+IYaXU9AfwikfG0wtPVsT6FSR8gmric3Ii8bcfQBO1Wbs82Mhnax+hqu4cQetFvwjMAJEynqk+JJ9iKco2qOaEursd8TxqAktoWFE65bgX0kbnlWjLjTSVJW4AvKSEpBWpS7QkxZAibk7aUkZUUozfxrJy9ALFXnJIHko7CjuGYDKnOrVXw+XP1qaUUb41PLPQW1xXLGZKh5EH5U5wPGmlf+okf7pSaDZ4SCnM5YVC5g0qslIAHSs/pkenFZ4ryF9oMUFBCUqBlUmDNgLUOw0dBWmB4SEqmNKbOJDab6mtY0lRw5oTzS7yF+JcIECoUKMwN6y49mGbb+Ebnqa3wzUXOv6tFNyJxYH2HPDlmIkDfMTGWP4pi3610LfE4YKIUFhRIkmIk329qrvDmu8UcxytJguK5nUJHMmnKMclRJCSBMAAaAAQPOuWUqZ6mTDGWKpCxPAnvu0U32ff8Au1fm3ByqYYgCuL9VI+Z7s56vs2+dq8nso8a6H9oqRLgpfqpi7s5+jsm7zqVPZFZ1NXpTw5VEXql8mYdmU9HY8jep09kxuateeshyofJn8k9mVdPZVOk1WONOgOmDBmx2IGk8j1rpPEMZ3TanCJCfqQL9L1yLijpzSoRfXUH10rt4blkTbO7h5FBNv7G7i7nYkadeYqXDDMoHmCDSxjMpQS3K1EiEC5J6UzfwL7CyhxpxB6pMeihY+YNdEo0e5iyKTszirgq/kqr9of8AUSP5T/3Un6GnjLspA6EH0MUi41/qp/2//os1rjPN5kr/ALBkiFDyqd27aVbplB9JKD6pMf8Agahd2PWjuELHe5SJSSkx1SQpJ0O8p8lnTUanAT4fA53EN7AAHoEjxH1UVe9PsMEZiogGDCEyAABbfyobhgjMvc2H/ZXzIpjhnAlAISCq50nyHzrmyNs93hQ6Y+z/AHJFt94ZWUxsAREe9ZWEAWj3FFvuKCFKOWQJiEaX0h0zodATbTSfLwDpaL4aV3SYBXYCSQNJkiSBOlZxTOj9TCUHT39/uBd8lIJ/P6Cq9xLFlxRuI/XOm+Ic8JFqXLIAzRYQfYyfwrZHm5G2SPQFAfdSPfnRAQAmVqyg8ozEchOm9z9TSlp8zmN1EzGw/rUt1GVGm4s0x5Yy0g04sqhKRlQn4UjQdTzPU034TxBttBC0knNNo0gc/I0gW+E71qy+pQkaTWEsfbyXm6zVM634q1M0Ylua07q9eQfOA6FUQh3nW60jlUeSiqESFQrQmtkxXm43FAzANbA1uECalyilQhN2vxGTBuRqrKn/AJKE/Ka5I48pski6Tt/SukdvsUpCUIQnMbqPQfCPU+KubOKWok5Fa/dMV7HBh1xfudGNaOl/se4gnunEJaJczy44hFilVkAqAtEK8Pmd6vnEFqCgkITB3Bg1z39kRdS3iQMiG8wUVZvEVlIATlFohM6jWrah68r1+9qD73FLL/yZ62Lwimduey8Ev4cXMlxvn/OjrzG+ovY8t4iZUlXQj2Wo/goV9F4lkLFcq/aF2LW3/mGUlSZJcSASRmiVgDa140151phybpmXJg3G0URwSmpsA4O8BmJHzzC365UKhy1aYdUKT0WPxFdRwFnae8IH6vR/2kJEZcw3Av8AjVfZd+lE/aoNYyietg5P0UOF8RYiChUWsU2tpoKke7YqDH2YLX3UzlCU38WbLMTlzXj6WpCvEUC6q9EYhmz3CqX9BuI4039xR/X+6g8TxcrGVKAmdTYn8KDcaK1BI3o9LPd2gqPOIHyrSjz5ZZMKweHURYecmKJRhyNVoHqSfkOtBJeKrEx0FqMbw3rUyZ0YY0rLDwHgDCk9/iPEiSlCYWnOoAkzlJOUQQIi4Nxlgu3OHi3+QBECMjqgINwDlcEnrUaUt/ZsMArLLdlC2U/xGQDfvFrkb3nSsqw74+Fwkcy4NiRaG9LDrqK8+eSfbTr9/sa3W/8ABdAa0MTWXkmoRY3FclHhksCaz3QrBNZSulQHskVgE8q2U7aspctSoDIdG4rKSK0TrUiEilQil/tJQ4ksuNKIzBSVRb4SCn/squePJWr/AFCrzn866920w+bDZou2tKh6+H/7CuYY5hBuXI6KmvU4s7xpfB6nGSeNMsv7M8MMuI/fGD3YCIvPiObXSBH9hV1QVo5Ecq4ozxLu1DuVKUrpZJA1CtyParZwftuwrwOEtqG5Mo9FfnFXODbs6PzEjpeHxieRnkKMD4O1VbhvHWfvg+oNP0Y9spzAzNYtGilZVe23ZXBKQrELR3akjMpTfhKgDcFIEKJ0mJuL1yx7gButKgga5DKo81c6vvbvi5WoMj4cwJ6hABH/AMyn2qtF6Bz0P69Yruwx+nZ52eSc9C1vhKp+IexrbiOCDIClrubAAdPP9TTTDzItMfjQXFcMX3wg6IRPqokj5BNEmdWDE3DS36Faj/Shiq/rRo4U4lMnwibSd/xofFcPcbAWoeEnXahNE5IyS2iFlas5CE5lGANbSbn8KseAw7pgLbBTuRaI86F7P+NBRlKZJIWDGYgaHypm3w92PC8ryVSlKjTi4bp1ZsOGpOkVkcOUn4fb+taJxDjRhxMj7yamfxBKZQqaxcnZ6ksWJqkqYZgeMd02rDOqyoUQQvLn7syCoZfum8EA5SqYM2fYVp9SErRhQ+FSc7TiFoMKKYC8wzWSJ6yNq5ziFEm9dr7F4hpvAYZJcSk92FQSB8ZK9Cf5qialD6scbZ4nPdaRKV2rSZ1qTuUgV4NAV5tnmmhUK0dMEVOGQax9mBtmosCFKhUgN6ycGBeaz3O5NIDYKrdauVRdzyNbBg86BGmNbzNrTrKT7xb51wrjCu8dUBZCTc86+gGmCK4Zx7BHDvutqHwLUfO8o9wUmu3hPbR2caVRaE2LXlhpsQVfEdwOU1CtiAUp2+JXX7o61q2uCVG5jMo/9U+9SNG0b6nzN69Kgc22BDDkbwaP4fxbEMmUOqjcEkp9jp6VgRRH2cRfU/hUtGmNXsYLx5ePeHUifU3P4VqHJUE9R/T6UuZ8BiJTItTnheHCnASmwToLam3l8J96pNKJKg5ZEvknbkbj1/KvcP8A9ZxXJUf8QE/SmjuAZSlThTCUiTrp5zqdPWq9wzFSFH7xJ9zXPKXZaPdjjWJxX8licYzPtzdMEjlMgfWjXEhQIIEZojypdhcUJRP8J+RrcY0SofzzWSs7oZIpNteRaMCc6/EoSsjw2gCIgfOj8DiJAkzqJ3Mag9ajdxSUlSuYt5/2pdhlWImDqOh1kVtfZHnRyRxZLiWRSARtoarr6MpMe1SN8QJTOihZQ+tCOP8AOs4waZ0ZMsZrsjHd51AD+Ige5roiuzKmQlBJcOUEqCbA6ZR0ECqX2dbSp9GYEiSco+I2tlG5BEwNYrsrXGcPAzPISdwrwq9UquKWSWaNPGr+T5znT7ToFPlWt9q0zGdayTmO9eXRxG4X6VltQvWqmyNQfY1IywVfDf2+taLHN+EOmaqWbRWYmpf8OKROZFxPxjz0FYRhgL94DOgSFGTyBMCZ61a42T4H1Z5IrKVGagdxPdxmSsA7hp5YT/uUhBSPeo3uKoSJzFQIJlLbxsDGyLGeetV+kyMOrDw71rmv7XcDCkPgWcTlUf5kae6SP+NXN3ipsENOEkSBCBm0+ErIBidAaqXaTj4xSDhltvDxfcbkLSdoJIOvpNb4ONkxzUnReOXVnLCAlMKuVGT5DT61Ep4weaj7Crbj+wzmZWV0EpAkGJvERBg66C9jalD3ZV5JHiSZEiJNjvavRLtAOHUEwTtejGHCo5jUa+APgSACIm2Y6elqjTgnhbIbdPcQalm0JpBSk5rD1NWTswyXZykqIKh4YJOUBRABgTAqouNvxAQoDeBJ+VE8N4t9mWUkeHKmUxqSmSbi5k+3pEtOqNsc4KSb/v4LH23xoSyloKBK1bbpTv5GqthcTAoHiuPU+4XFb6DkNhUCHiKUYUjTPzHPK5Lx4RZk4wbH0rf7Veq2jE87VMjFdZo6IuHMdUxy5iZEVqxioUKU/aqynE3mn1MnnTdjR13KSeo+f9frUSnbxQGIxEip8LKjI2BJ8hcnytR1oTz+kE4zEFGTKSFBQVIsQU6Gdrke1X7s1xDhTrAVjS4l+SFfvHiFbhSQD4QZ05g1y99wqVJ8h5fnc1MhRiolC1SdEuKn5PoNnGKU4Epwz4SY/eFsJRy/iXn6/DtU2KZxBCih5pBGoU2pwx1CXUc+W+1FleJDigAgtZfDmKg4VTEQbAATtf8ABJxztA+0QhC8ElRkKz4hbi0Wme7DSfrGsRNNRS8HNpA2PYxCVp7zHMoQYSEhAS444bZG5KYk2EKX10rTBYfFBLneOJbU4E/vQ668oEAkZW3gpFzPwFMxvFEvFxbCVFDGJWkgLUEpUIgELUnxE3m0DURl29guzzDl3W2XBmKsg75CEGICksqUqDe/pEVV6J8vQeiW0Ba3SrKnVaG20QACXIQgAaaxY8qFGPZdUQ3iVKUU+FDbhiARcpRBUJ/iJJ8VzepGuy2GSowHEg6AOOwLRBJVM+RoXH4cIebbYxDbQggs5WlLWqYSQVEKIIM+m+xYbF7HZzFeMjEhKiQG1fvXsqJlQIfcJCj4fEJ3FrEOsNhHm8xViluIIgKUEIUkyb2lKpP82m06IcV2gUl8MJWhahZaW2XFuSfCAQkhCUiZgKJp7ieH4hwoUziQyhBHhUwSoxYhcLSR6WvQ2JJMT4niqyohGDxLqpKQYUhBMzKHZIOn8JOpmj8G9iC3CmQhzN4my74Up5Hu0qvF/huasTyUpHiVAJuY1IsJ022FV/imGwzz4714haAIYU4EAmxCigxl02VykaQWDTI+FcNcQpSnA2cyrhKMoSNBcJBURJkkH5CvPdngtNkEAiAUlUwRfwqBSJibztTNbhQ2pSVoWQoeI+PLGslAMmNiDVW4dhFPqD+Kxff/AL4BuHFpAyx4y1CYvYRlAg3M1SJaBuK9nw2W0953YMzmQHCoJBkXjKfi+EbztUGL4OhJQSUhKzlTElBOxGY+G9r2mb7C4IcQVqQ2SoIAICdDYwMykkaGbAmxvSDjjOIcAW1hmnMOleUIVmVniCR3eQuGSTbLpB82LaFvEeAZGyshJTEnJCjBGh7oHLudtPdIrsuHkSiUq3LjZE6CE5hY3N52HlXQeGvlbQWtoNnTLmV4dQCULCSkSPhgelQd+talBXdragz3XeTIsmbEJuRoTymiw2zluL7NFsSobkG3tY/StFdmTumOs/jFhXUcJmKUlSReRlBKQCYgGwAsbkrIEG9BY3AKcKg0QlxIv3aVKVki0rJyxebE8+tMNnOXeypA5zoBCjreYOmvtUGI7NFInP6Ecq6S3w/EJCEgtuoAEEgJCZ/mi59dqGxeAxByJQ2mCT4s7ZGXcZnMo2O5o0FyOangTkHKpKjy09JNpod7hjyfiQY9PzrsCuANE+FlyCbJTlykCZhSCSTY7mtEcGSmCELHmJEesxp8jQClI479kc0yKmp2sC6Ry5g2HrFdRxWAZ8XhFtISSSNjAtcUswGPY75LMKDhnKCD12AkWB3FqBqbKSOHuwf3ZI/l8XyFx61ARFq7Dh+HNmTlKRe9udrG8dSaIc4Y2fiSlRjVQkxtdQmoaN4568oF7V9pFJWppbrbgv8AuUrdTYgjVOGR01WqkPZBSsY8EMtsMJCTmdDSXXAgD4Qp4klZsJtuTyPq9Q9GS2zo6eEttpypefKsvgWpxySZuciIQBYWjepsH2bCge8zOTHxd0CSNPEhIWSL6q3NzWa9UWzRxQmweFfDiwUv4UqSUhReRiEpiySEKKiTEDWPYUfhuENoWlTpU69aVrJUZGmQk/u9ZhMJ1tevV6iTEkhqxw4LzgITMkmwTM63TzNVbiuKwfe90gvKITK0oWtIEkD4lqudbRB5jf1epeEEloa8N4CwUoUGE5iLKcQ0XIkQSsZp85zWvtTB3BwnKtKVC4SkpTaBJA9KzXqdjS0VHjWBZbl04h9CNklxzup2+BPeRMaR50uOOaeSMmJCQCLf5oIkjcJhStDcma9Xq0Rm0PnsAjEIbecyrUnVQLiW4FrJ12iCnlrWFs5e9yuuBKIhtWQgggkkpKCDtv6VmvUrCtC9jtRhWcqVBeVSvGsJiIBSfBMQDm0vuKfuOthRDQQoJgKUQpJgoziyYzD8qzXqYIV8Wxisig4EpEhIKXHUEgAz4kAqG8X5zNAcM4Zh0hTrS3kKmSvP3gSACdFJGa/8swrW1er1MiTCng644FtltxChdZK87iSoZlFCkhIMkCDyo55CAucqRoCFSMt4sUhUiCLCN69XqGC2JeP4LErcSMMWUgkfF4SYMC6WyVa3mD9MN4B9tsqxPeZibKb7sNhOWD4VOFRMyZtta1Zr1MlvY3Qw18ShMkBBTmJJ8I1WqQIgTM2rZWEZDJxa0gIgBSwkEgzpPxbkWBFx1r1epMtbE/DeOHEOKQ01GQgOEqggLByGAkSqQdCdNt2GK4VjFKlGIKR93KlUX5yJ9q9XqkdH/9k='}
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-teal-500"
                />
              </div>
              <input
                type="file"
                onChange={handleImageChange}
                disabled={!isEditable}
                className="w-full p-3 border rounded-md bg-gray-100"
              />
            </div>

            {/* Personal Information Section */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <label className="block mb-2 font-bold text-gray-700">Name</label>
              <input
                type="text"
                defaultValue="Sanam Puri"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Email</label>
              <input
                type="email"
                defaultValue="sanampuri777@gmail.com"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Phone Number</label>
              <input
                type="tel"
                defaultValue="+91 88773947439"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Address</label>
              <input
                type="text"
                defaultValue="999 Main St, City, Country"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Date of Birth</label>
              <input
                type="date"
                defaultValue="1990-04-01"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
            </div>

            {/* Job Details Section */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Job Details</h2>
              <label className="block mb-2 font-bold text-gray-700">Position</label>
              <input
                type="text"
                defaultValue="Software Engineer"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Department</label>
              <input
                type="text"
                defaultValue="Development"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Salary</label>
              <input
                type="text"
                defaultValue="$80,000"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Date of Joining</label>
              <input
                type="date"
                defaultValue="2023-01-15"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Manager</label>
              <input
                type="text"
                defaultValue="Jane Smith"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
            </div>

            {/* Previous Projects Section */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Previous Projects</h2>
              <label className="block mb-2 font-bold text-gray-700">Project Name</label>
              <input
                type="text"
                defaultValue="AI Chatbot"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Role</label>
              <input
                type="text"
                defaultValue="Lead Developer"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Duration</label>
              <input
                type="text"
                defaultValue="6 months"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
              <label className="block mt-4 mb-2 font-bold text-gray-700">Technologies Used</label>
              <input
                type="text"
                defaultValue="React, Node.js, MongoDB"
                disabled={!isEditable}
                className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              />
            </div>
          </div>

          {/* Specialties Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Specialties</h2>
            <textarea
              value={specialties}
              onChange={(e) => setSpecialties(e.target.value)}
              disabled={!isEditable}
              className={`w-full p-3 border ${isEditable ? '' : 'bg-gray-100'} rounded-md`}
              rows="4"
              placeholder="Enter your specialties (e.g. JavaScript, React, etc.)"
            />
          </div>

          {/* Submit or Edit Button */}
          <div className="mt-6 text-center">
            {!isEditable ? (
              <button
                type="button"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                onClick={handleEditClick}
              >
                Change Details
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;