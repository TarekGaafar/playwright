export class DatabaseActions {
  async emailConfirmation(sql: any, Email: string): Promise<void> {
    try {
      // const result =
      // await sql.query("EXEC QC.qc_ConfirmEmail @Email ='" + Email + "';");
      await sql.query(
        "update Saber_test.dbo.AspNetUsers set EmailConfirmed=1 where Email='" +
          Email +
          "';"
      );
      console.log(
        "ran query is that------->>::" +
          "update Saber_test.dbo.AspNetUsers set EmailConfirmed=1 where Email ='" +
          Email +
          "';"
      );
      // const userId = result.recordset[0].Userid;
    } catch (err) {
      console.log(
        "ran query is that------->>::" +
          "update Saber_test.dbo.AspNetUsers set EmailConfirmed=1 where Email ='" +
          Email +
          "';"
      );

      console.log("Error in data base connection that::" + err);
    }
  }
  async DBExample(sql: any): Promise<void> {
    const result = await sql.query(
      " select Userid from Saber_Test.dbo.UserProfile Where ID = 1"
    );
    const userId = result.recordset[0].Userid;
    console.log("User id is::" + userId);
  }
}
