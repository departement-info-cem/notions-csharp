```cs
public int Quantite(enuBreuvage pBreuvage)
{
    switch (pBreuvage)
    {
        case enuBreuvage.Coke:
            return m_nbCoke;
        case enuBreuvage.SevenUp:
            return m_nb7up;
        case enuBreuvage.JusDePommes:
            return m_nbJusPomme;
        case enuBreuvage.TheGlace:
            return m_nbTheGlace;
        default:
            return -1;
    }
}
```
